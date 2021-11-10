
const router = require('express').Router();
const {User , Event, Member} = require('../../models');
const shuffle = require('./../../utils/shuffle');

//get all events
router.get('/' , (req, res) => {
    Event.findAll({
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name', 'email', 'id']
            },
            {
                model: Member,
                attributes: ['user_id', 'email','accepted', 'acceptedDate', 'invitationDate', 'giveToMember']
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
            },
            {
                model: Member,
                attributes: ['name','email','accepted', 'acceptedDate', 'invitationDate', 'giveToMember']
            }
        ]



    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//add event
router.post("/", (req, res) => {
  Event.create({
    name: req.body.name,
    description: req.body.description,
    lottery_date: req.body.lottery_date,
    budget: req.body.budget,
    party_date: req.body.party_date,
    user_id: req.session.user_id,
  })
    .then((dbEventData) => {
      //anything else?
      res.json(dbEventData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//update event
router.put("/:id", (req, res) => {
  Event.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id." });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//POST do the lottery
router.get("/:id/lottery", (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "id"],
      },
      {
        model: Member,
        attributes: [
          "name",
          "email",
          "accepted",
          "acceptedDate",
          "invitationDate",
          "giveToUser",
          "receiveFromUser",
        ],
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id." });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});


//TODO: shuffle/lottery
router.post('/shuffle/:id', (req, res) => {
    Member.findAll({
        where: {
            event_id: req.params.id,
            accepted: true,
            giveToMember: null
        }
    })
        .then(dbMemberData => {
            if (!dbMemberData) {
                res(404).json({"message": 'There are no members to shuffle for this event id'});
                return;
            }
            //valdiation <3 ?
            //do lottery and update db
            return shuffle(dbMemberData);
            //send notifications ? with hook?
        })
        .then(dbMemberData =>{
            res.json(dbMemberData);
        })
        .catch(err => {
            console.error(err);
            res(500).json(err);
        });
});


module.exports = router;

