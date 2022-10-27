var express = require('express');
var router = express.Router();
var x=Math.random();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', {
    result1:'Math.fround()  applied to '+x+ 'is'+Math.fround(x),
    result2:'Math.random()   applied to '+x+ 'is'+Math.random() ,
    result3:'Math.round() applied to '+x+ 'is'+Math.round(),
  title: 'computation by susmitha' });
});

module.exports = router;
