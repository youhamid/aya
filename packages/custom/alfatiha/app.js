'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Alfatiha = new Module('alfatiha');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Alfatiha.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Alfatiha.routes(app, auth, database);

//   //We are adding a link to the main menu for all authenticated users
//   Alfatiha.menus.add({
//     title: 'alfatiha example page',
//     link: 'alfatiha example page',
//     roles: ['authenticated'],
//     menu: 'main'
//   });
  
//   Alfatiha.menus.add({
//     title: 'alfatiha',
//     link: 'alfatiha',
//     roles: ['authenticated'],
//     menu: 'main'
//   });
  
  Alfatiha.aggregateAsset('css', 'alfatiha.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Alfatiha.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Alfatiha.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Alfatiha.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Alfatiha;
});
