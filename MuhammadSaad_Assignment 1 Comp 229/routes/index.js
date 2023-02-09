var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET about me page. */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'About Me' });
});
/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* GET contact me page. */
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;
