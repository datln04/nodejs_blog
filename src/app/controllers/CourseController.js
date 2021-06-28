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
            .catch(next);
        
        
    }

    // get courses/:id/edit
    edit(req,res,next) {
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

    // DELETE courses/:id
    delete(req, res, next) {
        Course.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // patch courses/:id/restore
    restore(req, res,next){
        Course.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroy(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController();
