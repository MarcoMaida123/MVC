const User = require('../models/Cliente');

exports.home = (req, res) => {
  User.find().sort('id').exec((err, users) => {
    res.render('index', { users: users });
  });
};

exports.search = (req, res) => {
  let result = null;
  User.findOne({ id: req.query.id }).exec((err, user) => {
  	if (user != null) {
  		result = [user];
  	}
    res.render('index', { users: result });
  })
}