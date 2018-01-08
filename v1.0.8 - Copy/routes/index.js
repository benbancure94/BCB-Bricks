var express = require('express');
var router = express.Router();
var gameData = require('../functions/brickGameData');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brick Game' });
});
router.get('/getGameData', function(req, res, next) {
  res.send(gameData.getData());
});

module.exports = router;
