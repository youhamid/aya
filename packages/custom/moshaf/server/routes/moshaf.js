'use strict';
var moshaf = require('../controllers/moshaf');
// Article authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && req.article.user.id !== req.user.id) {
    return res.send(401, 'User is not authorized');
  }
  next();
};
module.exports = function(Moshaf, app, auth) {
  app.route('/moshaf')
    .get(moshaf.all);
  app.route('/moshaf/:rakmSafha')
    .get(moshaf.show);
  //app.route('/moshaf/:rakmSafha')
    //.get(moshaf.show);
  // Finish with setting up the  param
  app.param('rakmSafha', moshaf.safha);
};



