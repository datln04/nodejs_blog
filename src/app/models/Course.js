const mongoose = require('mongoose');
const Schema = mongoose.Schema; // doc trong docs mongoose automative

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}

});

module.exports = mongoose.model('Course', Course);  // doc trong docs luon hen