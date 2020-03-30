var express = require('express');
var router = express.Router();

var jobController = require('../server/controllers/job');

/* GET home page. */
router.get('/', function(req, res, next) {

  jobController.getAll().then(function (jobs) {
    console.log(jobs);
    res.render('index', {jobs: jobs.message});
  });

});

router.post('/searching', function(req, res) {
    var item = req.body.searchAnything;
    console.log("User is looking for " + item);
});

module.exports = router;
