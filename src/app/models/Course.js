const mongoose = require('mongoose');
const Schema = mongoose.Schema; // doc trong docs mongoose automative

var slug = require('mongoose-slug-generator');// generaslug to navigation
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},  
    videoID: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true}

}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);  // doc trong docs luon hen