module.exports = {
    // template handlebars ep kieu object nen phai map tung cai va ep thanh objject bth
    mutipleMongooseToObject: function(mongoose){
        return mongoose.map(mongoose => mongoose.toObject());
    },

    mongooseToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
}