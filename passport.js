'use strict';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const credentials = require('./credentials');
const connect = require('./connect');
const db = require('./db');

module.exports = function (passport) {
  var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    secretOrKey: credentials.cookieSecret
  };
  passport.use(new JwtStrategy(opts, function (jwt_payload, callback) {
    // Should look for way to change to findById
    db.findUser({username: jwt_payload.username}, function (res) {
      var user = res;
      delete user.password;
      callback(null, user);
    }, function (err) {
      return callback(err, false);
    });
  }));
}
