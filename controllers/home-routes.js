const router = require('express').Router();
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


// Lost route
router.get('/lost', async (req, res) => {
  res.render('lost')
});

// Found Route
router.get('/found', async (req, res) => {
  res.render('found')
})
router.get('/browsefound', async (req, res) => {
  res.render('browsefound')
})
router.get('/browselost', async (req, res) => {
  res.render('browselost')
})

module.exports = router;
