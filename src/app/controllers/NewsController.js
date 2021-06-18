class NewController {
  //[Get] News
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("News Detail");
  }
}

module.exports = new NewController();
