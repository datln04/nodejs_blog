const mongoose = require('mongoose');


async function connect(){
    // connect DB 

    try {
        await mongoose.connect('mongodb://localhost:27017/psy_education_dev', {
           useNewUrlParser: true,
           useUnifiedTopology: true 
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('fail');
    }


}

module.exports = { connect };