const router = require('express').Router();
const {User , Event, Member } = require('../../models');
const sendInvitation = require('./../../utils/sendNotification');
const buildInvitation = require('./../../emailTemplates/invitation');//needs to be arg for function


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

router.post('/invite/:id', (req, res) => {
    const emailList = req.body.map(member => member.email);
    Member.bulkCreate(req.body)
        .then(dbMemberData =>{
            return Event.findOne({
                where: {
                    id: req.params.id,
                },
                include: [
                    {
                        model: User,
                        attributes: ['first_name', 'last_name', 'email', 'id']
                    }]            
            })
        })
        .then(dbEventData => {
            //send invitation to new members
            const invitation = buildInvitation(dbEventData,emailList);
            return sendInvitation(invitation);
        })
        .then(dbMemberUpdate => {
            res.json(dbMemberUpdate);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.post('/invite', (req, res) => {
    Event.findOne({
        where: {
            id: req.body.event_id
        },
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            },
            {
                model: Member,
                attributes: ['email','accepted', 'acceptedDate', 'invitationDate', 'giveToUser', 'receiveFromUser']
            }],
       
    })
        .then(dbMemberData => {
            //check if there are membrers with this event
            if (dbMemberData.length===0) {
                res.status(404).json({message:'There are no members with this event id'});
                return;
            }
            //send invitation to all members
            const invitation = buildInvitation(dbMemberData);
            return sendInvitation(invitation);
           
        })
        .then(info => {
            //check if sent
            //update the invitation date field in db
            return Member.update({
                invitationDate: new Date(),
            },{
            where: {
                event_id: req.body.event_id
            }
            //Update event status

        })
        })
        .then(dbMemberUpdate => {
            res.json(dbMemberUpdate);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
});

//one invite to a member
router.post('/lottery/:id', (req, res) => {
    Member.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
            model: Member,
            as: 'recipient',
            attributes: ['name', 'id'],
        },

        ]
    })
        .then(dbMemberData => {
            if (!dbMemberData) {
                res.status(404).json({message:'No member found with this id.'});
                return;
            }
            return dbMemberData.lotteryNotification();
        })
        .then(dbMemberData=> res.json(dbMemberData))
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})



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