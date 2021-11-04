const router = require("express").Router();

//GET home page
router.get("/", (req, res) => {
  res.render("home");
});

//GET Privacy Policy
router.get("/privacy-policy", (req, res) => {
  res.render("privacy-policy");
});

module.exports = router;
