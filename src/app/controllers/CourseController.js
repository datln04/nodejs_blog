const Course = require('../models/Course'); // doc trong docs cua mongoose automative luon
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
  // :slug
  
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then(course =>              
                res.render('courses/show',{
                    course: mongooseToObject(course)
                })
            )
            .catch(next);
        
    
    }
}

module.exports = new CourseController();
