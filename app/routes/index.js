//  TODO: http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express');
var router = express.Router();
var context = require('./../data/context.index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', context.init({errorState: false}));
});

/* GET home page. */
router.get('/test-route', function(req, res, next) {
  res.render('test-route', { title: 'Test: routes.js' });
});

/* GET home page. */
router.get('/waypoints', function(req, res, next) {
  res.render('waypoints', { title: 'Test: Waypoints' });
});

module.exports = router;
