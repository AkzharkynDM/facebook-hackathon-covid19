var express = require('express');
var router = express.Router();
var Controller = require("../server/controllers/job");

router.get('/jobs', function(req, res, next) {
    Controller.getAll().then(data =>{
      res.status(data.status).send({data: data.message});
  }).catch(err =>{
      res.status(err.status).send({message: err.message});
  });
});

router.post('/jobs', function(req, res, next) {
  Controller.new(req.body).then(function (data) {
      res.status(data.status).send({message: data})
    }).catch(function (err) {
      res.status(err.status).send({message: err.message})
    });
});

module.exports = router;
