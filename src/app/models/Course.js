const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var slug = require('mongoose-slug-generator');// generaslug to navigation

const Schema = mongoose.Schema; // doc trong docs mongoose automative



const Course = new Schema({
    name: {type: String, maxLength: 255},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},  
    videoID: {type: String, maxLength: 255},
    slug: { type: String, slug: 'name', unique: true}

}, {
    timestamps: true
});

// add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { 
    deleteAt:true, 
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Course', Course);  // doc trong docs luon hen