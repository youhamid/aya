'use strict';
/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Moshaf = mongoose.model('Moshaf'),
    _ = require('lodash');
/**
 * Find  by id
 */
exports.safha = function(req, res, next, rakmSafha) {
    Moshaf.load(rakmSafha, function(err, safha) {
        if (err) return next(err);
        if (!safha) return next(new Error('Failed to load' + rakmSafha));
        req.safha = safha;
        next();
    });
};
exports.show = function(req, res) {
    res.json(req.safha);
};

exports.all = function(req, res) {
    Moshaf.find().exec(function(err, safha) {
        if (err) {
            return res.json(500, {
                error: 'Cannot list'
            });
        }
        res.json(safha);
    });
};
