var express = require('express');
var router = express.Router();

/* GET users listing. */
router
	.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	})
	.post('/', function(req, res, next) {
	  res.render('user_info', req.body);
	});

module.exports = router;