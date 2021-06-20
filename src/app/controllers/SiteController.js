const Course = require('../models/Course');


class SiteController {
  //[Get] News
  index(req, res) {
      Course.find({}, function(err, course) {
        if(!err) res.json(course);
        res.status(400).json({errors: 'ERRORS'});
      })

  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
