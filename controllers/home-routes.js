const router = require("express").Router();
const { Event } = require("../models");

//GET home page
router.get("/", (req, res) => {
  res.render("home", { loggedIn: req.session.loggedIn });
});

//GET login route page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login", { layout: "login" });
});

//GET Privacy Policy
router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy", { loggedIn: req.session.loggedIn });
});

//Get icons page
router.get("/icons", (req, res) => {
  res.render("icons");
});

//Get owner page
router.get("/owner", (req, res) => {
  res.render("owner", { loggedIn: req.session.loggedIn });
});

//Get create Event page
router.get("/create-event", (req, res) => {
  res.render("create-event", { loggedIn: req.session.loggedIn });
});


router.get("/invite/:id", (req, res) => {
  res.render("invite");
});



//   res.render("invite-to-event", { loggedIn: req.session.loggedIn });
// });

//Get Accept Memger page
router.get("/member-signup/:id", (req, res) => {
  // eventId=req.params.id;
  //Get Event information db
  Event.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id" });
        return;
      }
      const event = dbEventData.get({ plain: true });

      res.render("member-signup", {
        layout: "login",
        loggedIn: req.session.loggedIn,
        event,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;
