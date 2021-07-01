const Course = require('../models/Course'); // doc trong docs cua mongoose automative luon
const {mutipleMongooseToObject} = require('../../util/mongoose');


class MeController {
  // Promise.all([])
    //.then(([course,..]) => render)

  //[Get] News
  storeCourses(req, res,next) {

    

    var queryCourse = Course.find({})

    if(req.query.hasOwnProperty('_sort')){
      queryCourse = queryCourse.sort({
         [req.query.column]: req.query.type
      });
    }

      queryCourse.then(course => {
        res.render("me/store-courses", {
          course: mutipleMongooseToObject(course)});
      })
      .catch(next)
      
      
      
  } // auto tra ve 1 promise

  trashCourses(req,res,next) {
    Course.findDeleted({})
      .then(course => {
        res.render("me/trash-courses", {
          course: mutipleMongooseToObject(course)});
      })
      .catch(next)
  }

}

module.exports = new MeController();
