const router = require('express').Router();
const { Animal } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET homepage
router.get('/', async (req, res) => {
  res.render('homepage')
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
