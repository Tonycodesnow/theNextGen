<<<<<<< HEAD
const router = require("express").Router();

const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);

module.exports = router;
=======
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use('/api', apiRoutes);

router.use((req,res)=> {
    res.status(404).end();
})

module.exports = router;
>>>>>>> 6c14a2446117c9b43d20b4d297f3f9a1ce21a2f8
