const router = require('express').Router();
const {User , Event, Member } = require('../../models');

router.get('/', (req, res) => {
    Member.findAll({
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            },
            {
                model: Event,
                attributes: ['name','description','lottery_date','budget','party_date']
            }
        ]
        
    })
        .then(dbMemberData => res.json(dbMemberData))
        .catch(err =>{
            console.error(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    Member.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            },
            {
                model: Event,
                attributes: ['name','description','lottery_date','budget','party_date']
            }
        ]
        
    })
        .then(dbMemberData => {
            if (!dbMemberData) {
                res.status(404).json({message:'No member found with this id.'});
                return;
            }
            res.json(dbMemberData);
        })
        .catch(err =>{
            console.error(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) =>{
    Member.create({
        email: req.body.email,
        event_id: req.body.event_id
        
    })
        .then(dbMemberData => {
            res.json(dbMemberData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
});

router.put('/:id', (req, res) => {
    Member.update(req.body , {
        where: {
            id: req.params.id,
        }
    })
        .then(dbMemberData => {
            if (!dbMemberData) {
                res.status(404).json({message: 'Member not found'});
                return;
            }
            res.json(dbMemberData);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;