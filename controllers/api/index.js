const router = require('express').Router();

const userRoutes = require('./user-routes');
const foundRoutes = require('./found-routes')

router.use('/users', userRoutes);
router.use('/found', foundRoutes)

module.exports = router;
