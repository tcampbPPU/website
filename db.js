'use strict';
const connect = require('./connect');
const db = {};

db.findUser = function(user, successCb, errorCb) {
  connect(function(con) {
    var q = "select * from user where username = ?";
    var values = [user.username];
    try {
      con.query(q, values, function (err, result, fields) {
        if(err) {
          errorCb(err);
          return;
        }
        if (result.length > 0) {
          successCb(result[0])
        }else {
          errorCb('User Not Found.');
        }
      });
    }catch(err) {
      console.log(`ERROR: finding user, ${err}`);
    }
  });
}

module.exports = db;
