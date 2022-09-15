const router = require('express').Router();

const userRoutes = require('./user-routes');
const foundRoutes = require('./found-routes');
const lostRoutes = require('./lost-routes');

router.use('/users', userRoutes);
router.use('/found', foundRoutes);
router.use('/lost', lostRoutes);

module.exports = router;
