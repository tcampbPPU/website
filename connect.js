const credentials = require('./credentials');
const mysql = require('mysql');

module.exports = function (cb) {
  try {
    var con = mysql.createConnection({
      host: credentials.host,
      user: credentials.user,
      password: credentials.password,
      database: credentials.database
    });
  }catch (e) {
    console.log(`ERROR: connect: mysql.createConnection(): ${e}`);
  }
  con.connect(function (err) {
    if (err) {
      console.log(`ERROR: connect: con.connect(): ${err}`);
    }else {
      try{
        cb(con);
      }catch(e) {
        console.log(`ERROR: connect: cb(con): ${e}`);
      }
      setTimeout(function() {
        try {
          con.end();
        }catch(e) {
          console.log(`ERROR: connect: con.end(): ${e}`);
        }
      }, 60 * 1000);
    }
  });
};
