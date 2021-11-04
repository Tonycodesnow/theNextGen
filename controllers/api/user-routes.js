const router = require('express').Router();
const  {User, Event, Wishitem}  = require('../../models');

//get all users
router.get('/' , (req, res) => {
    User.findAll({
        attributes: {exclude: ['password']},
        include: [
            {
                model: Event,
                attributes: ['name','description','lottery_date','budget','party_date']
            },
            {
                model: Wishitem,
                attributes: ['name','item_url']
            }
        ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get user by id
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Event,
                attributes: ['name','description','lottery_date','budget','party_date']
            },
            {
                model: Wishitem,
                attributes: ['name','item_url']
            }
        ]
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'No user found with this id'});
                return;
            }   
            res.json(dbUserData)})
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//add user
router.post('/', (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password, 
        phone: req.body.phone
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.logged_in = true;
            
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//post login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'User not found' });
                return;
            }

            const validPassword = dbUserData.checkPassword(req.body.password);

            if(!validPassword) {
                res.status(400).json({ message: 'Incorrect password!'});
                return
            }

            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.loggedIn = true;

                res.json({user: dbUserData, message: 'You are now logged in!'});
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

//post logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


//update user
router.put('/:id', (req, res) => {
    User.update(req.body , {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData[0]) {
                res.status(404).json({ message: 'No user found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//delete user
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


module.exports = router;