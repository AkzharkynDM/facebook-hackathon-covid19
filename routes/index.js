var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let jobs = [{
    'name': "Job1",
    'cost': 15,
    'desc': "this is a job to do something",
    'location': "address",
    'tag': '#d8fca8',
    'creation': Date.now(),
    'expiry': Date.now(),
    'duration':  1
  }];

  console.log(jobs);
  res.render('index', {jobs: jobs});
});

module.exports = router;
