const router = require("express").Router();


//GET home page
router.get("/", (req, res) => {
  res.render("home");
});

//GET login route page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render("login", { layout: "login" });
});

//GET Privacy Policy
router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});

//Get icons page
router.get("/icons", (req, res) => {
  res.render("icons");
});

//Get owner page
router.get("/owner", (req, res) => {
  res.render("owner");
});

//Get Accept Memger page
router.get("/accept-member/:id", (req, res) => {
  // eventId=req.params.id;
  //POST new validate if the email of the user if on the invitation.
  //Get Event information db

  res.render("accept-member");
});

module.exports = router;
