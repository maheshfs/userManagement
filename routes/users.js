var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('getting users');
  
  res.send([
    {
    name:'Mahesh'
  },{
    name:'Manjot'
  }
]);
});

module.exports = router;
