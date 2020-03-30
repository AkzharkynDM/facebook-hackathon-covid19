var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type:Number,
        min: 0
    },
    desc: String,
    location: String,
    tag: String,
    creation: {
        type: Date,
        default: Date.now()
    },
    expiry: {
        type: Date,
        required: true,
        default: () => new Date(+new Date() + 7*24*60*60*1000)
    },
    duration: Number,
    token: {
        type: String,
        unique: true
    }
});

var Job = new mongoose.model('Job', schema);

module.exports = Job;