const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Event, Member, Wishitem } = require("../models");

//Get User Dashboard
router.get("/", withAuth, (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Event,
        attributes: [
          "id",
          "name",
          "description",
          "lottery_date",
          "budget",
          "party_date",
        ],
      },
      {
        model: Wishitem,
        attributes: ["name", "item_url"],
      },
    ],
  })
    .then(dbUserData => {
      dbUserData = dbUserData.get({plain:true});
      res.render('dashboard/home', dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Get Event Information
router.get("/event/:id", (req, res) => {
  //Get Event Information from database
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
            attributes: ['email','accepted', 'acceptedDate', 'invitationDate', 'giveToUser', 'receiveFromUser']
        }
    ]
})
    .then(dbEventData => {
        if (!dbEventData) {
            res.status(404).json({message: 'No event found with this id'});
            return;
        }
        dbEventData = dbEventData.get({plain:true});
        res.render("dashboard/event", dbEventData);
    })
    .catch(err =>{
        console.error(err);
        res.status(500).json(err);
    });
});

//Get USER Wishlist
router.get("/member-wishlist/:id", (req, res) => {
  //Get USER Information from database
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
    include: [
      {
        model: Event,
        attributes: [
          "id",
          "name",
          "description",
          "lottery_date",
          "budget",
          "party_date",
        ],
      },
      {
        model: Wishitem,
        attributes: ["name", "item_url"],
      },
    ],
  })
    .then(dbUserData => {
      dbUserData = dbUserData.get({plain:true});
      res.render("dashboard/member-wishlist", dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router;
