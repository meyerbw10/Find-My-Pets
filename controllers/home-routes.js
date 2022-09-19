const router = require('express').Router();
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET homepage
router.get('/', async (req, res) => {
  res.render('homepage', {
  loggedIn: req.session.loggedIn,
  })
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Lost route
router.get('/lost', withAuth, async (req, res) => {
  res.render('lost', {
    loggedIn: req.session.loggedIn,
  })
});

// Found Route
router.get('/found', withAuth, async (req, res) => {
  res.render('found', {
    loggedIn: req.session.loggedIn,
  })
})

router.get('/api/found/browsefound', withAuth, async (req, res) => {
  res.render('browsefound', {
    loggedIn: req.session.loggedIn,
  })
})
router.get('/api/lost/browselost', withAuth, async (req, res) => {
  res.render('browselost', {
    loggedIn: req.session.loggedIn,
  })
})

module.exports = router;
