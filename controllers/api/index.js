const router = require('express').Router();
const userRoutes = require('./user-routes');
const eventRoutes = require('./event-routes');
const wishitems = require('./wishitem-routes');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/wishitems', wishitems);

module.exports = router;