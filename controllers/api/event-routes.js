const router = require("express").Router();
const { User, Event, Member } = require("../../models");
const shuffle = require("./../../utils/shuffle");


//get all events
router.get("/", (req, res) => {
  Event.findAll({
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name", "email", "id"],
      },
      {
        model: Member,
        attributes: [
          "user_id",
          "email",
          "accepted",
          "acceptedDate",
          "invitationDate",
          "giveToMember",
        ],
      },
    ],
  })
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//get event by id
router.get("/:id", (req, res) => {
  console.log("GET Event ", req.params.id);
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
          "giveToMember",
        ],
      },
    ],
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }
      res.json(dbEventData);
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

//TODO: shuffle/lottery
router.get("/shuffle/:id", (req, res) => {
  Member.findAll({
    where: {
      event_id: req.params.id,
      accepted: true,
      giveToMember: null,
    },
    include: [
        {
          model: Member,
          as: "recipient",
          attributes: ["name", "id"],
        },
      ],
  })
    .then(async (dbMemberData) => {
      if (!dbMemberData) {
        res(404).json({
          message: "There are no members to shuffle for this event id",
        });
        return;
      }
      //do lottery and update db
      return await shuffle(dbMemberData);
    })
    .then(async (dbMemberData) => {   
        console.log('===================shuffle results')
        console.log(dbMemberData);
        const updateData= await dbMemberData.map(async (member) => {
            return await Member.update(member,{
            where: {
                id: member.id
            }
        })
    })

        return await Promise.all(updateData);
    })
    .then((dbMemberData) => {
        console.log(dbMemberData);
        return Member.findAll({
            where: {
              event_id: req.params.id,
              accepted: true,
            },
            include: [
                {
                  model: Member,
                  as: "recipient",
                  attributes: ["name", "id"],
                },
              ],
          })

    })
    .then(dbMemberData => {
        console.log(dbMemberData);
        return dbMemberData.forEach(member=> member.lotteryNotification());
        
    })
    .then(dbMemberData => {
        console.log(dbMemberData);

        res.json({message:'Shuffle is done notification sent to member email'});
        
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
