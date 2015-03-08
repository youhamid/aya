'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
/**
 * Moshaf Schema
 */
 
//var MoshafSchema = new Schema();
//var MoshafSchema = mongoose.model('Moshaf', schema);

var MoshafSchema = new Schema({
    rakmSafha: {
        type: String
    },
    ayattesSafha: {
        type: String
    }
});

/**
* Statics
*/
MoshafSchema.statics.load = function(id, cb) {
this.findOne({
rakmSafha: id
}).exec(cb);
}


mongoose.model('Moshaf', MoshafSchema,'Moshaf');