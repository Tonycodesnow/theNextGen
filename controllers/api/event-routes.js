const router = require('express').Router();
const {User , Event} = require('../../models');

//get all events
router.get('/' , (req, res) => {
    Event.findAll({
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            }
        ]
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err =>{
            console.error(err);
            res.status(500).json(err);
        });
});

//get event by id
router.get('/:id' , (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            }
        ]
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({message: 'No event found with this id'});
                return;
            }
            res.json(dbEventData);
        })
        .catch(err =>{
            console.error(err);
            res.status(500).json(err);
        });
});

//add event
router.post('/', (req, res) =>{
    Event.create({
        name: req.body.name,
        description: req.body.description,
        lottery_date: req.body.lottery_date,
        budget: req.body.budget,
        party_date: req.body.party_date,
        user_id: req.session.user_id
    })
    .then(dbEventData => {
        //anything else?
        res.json(dbEventData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

//update event
router.put('/:id', (req, res) => {
    Event.update(req.body , {
        where: {
            id: req.params.id
        }
    })
    .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({ message: 'No event found with this id.' });
            return;
        }
        res.json(dbEventData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
})

module.exports = router;