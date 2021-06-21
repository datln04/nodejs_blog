const Course = require('../models/Course'); // doc trong docs cua mongoose automative luon
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
  //[Get] News
  index(req, res, next) {
      Course.find({})
        .then(courses => {                
            res.render('home',{ 
              courses: mutipleMongooseToObject(courses)
            });
        })
        .catch(next);

  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
