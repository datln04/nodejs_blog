const Course = require('../models/Course'); // doc trong docs cua mongoose automative luon
const {mongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');

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

    // create a new
    create(req, res) {
        res.render('courses/create');
    }

    // insert courses
    store(req,res, next) {
        
        const formData = req.body;
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
        
        
    }

    // get courses/:id/edit
    edit(req, res,next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next);
        
    }

    // PUT courses/:id
    update(req,res, next) {       
        const formData = req.body;     
        Course.updateOne({_id: req.params.id}, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);    
    }

}

module.exports = new CourseController();
