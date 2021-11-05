const router = require("express").Router();

//GET home page
router.get("/", (req, res) => {
  res.render("home");
});

//GET login route page
router.get("/login", (req, res) => {
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

module.exports = router;
