const mongoose = require("../connection");
const Job = mongoose.model('Job');
exports.new = function (data) {
        return new Promise(function (resolve, reject) {
           console.log(data);
           try {
            var job = new Job({
              name: data.addJobFormTitle,
              // cost: data.addJobForm,
              desc: data.addJobFormDesc,
              location: data.addJobFormLocation,
              tag: data.addJobFormTag
              // duration: data.duration
              //expiration:date
            });
            console.log(job);
           } catch (error) {
              reject({status: 400, message:"Error "+error});
           }
            job.save().then(function () {
                resolve({status: 200, message:"Job added Successfully"});
              }).catch(function (err) {
                reject({status: 500, message:"Error "+err});
              });
            });
    };
    
exports.getAll = function () {
        return new Promise(function (resolve,reject) {
            Job.find().exec().then(function (data) {
                resolve({status: 200,message: data});
            }).catch(function (err) {
                reject({status: 500, message: err});
            });
        });
    };
