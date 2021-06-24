const Course = require('../models/Course'); // doc trong docs cua mongoose automative luon
const {mutipleMongooseToObject} = require('../../util/mongoose');


class MeController {
  //[Get] News
  storeCourses(req, res,next) {
    Course.find({})
      .then(course => {
        res.render("me/store-courses", {
          course: mutipleMongooseToObject(course)});
      })
      .catch(next)
  }

}

module.exports = new MeController();
