const router = require("express").Router();

//GET home page
router.get("/", (req, res) => {
  res.render("home"), { loggedIn: req.session.loggedIn };
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

//Get Invite to Event page
router.get("/invite-to-event/:id", (req, res) => {
  //TODO: Need Get Event Information and send to page

  res.render("invite-to-event", { loggedIn: req.session.loggedIn });
});

//Get Accept Memger page
router.get("/accept-member/:id", (req, res) => {
  // eventId=req.params.id;
  //POST new validate if the email of the user if on the invitation.
  //Get Event information db

  res.render("accept-member", { loggedIn: req.session.loggedIn });
});

module.exports = router;
