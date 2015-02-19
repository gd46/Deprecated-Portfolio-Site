var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Giuseppe DiBellas Portfolio Site' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

module.exports = router;
