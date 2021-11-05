const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const wishitems = require('./wishitem-routes');
const members = require('./member-routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/wishitems', wishitems);
router.use('/members', members);

module.exports = router;