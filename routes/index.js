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

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects'});
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Blog'});
});

module.exports = router;
