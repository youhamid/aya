'use strict';

// The Package is past automatically as first parameter
module.exports = function(Alfatiha, app, auth, database) {

  app.get('/alfatiha/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/alfatiha/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/alfatiha/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/alfatiha/example/render', function(req, res, next) {
    Alfatiha.render('index', {
      package: 'alfatiha'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
