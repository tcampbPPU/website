const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const credentials = require('../credentials');
const connect = require('../connect');
const db = require('../db');

const requireAuth = passport.authenticate('jwt', {session: false});
require('../passport')(passport);

// Generate our salt
const salt = bcrypt.genSaltSync(10);


router.post('/register', (req, res, next) => {
  db.findUser({
    username: req.body.username
  }, function (response) {
      res.json({
        success: false,
        msg: 'Registration failed. Username already exisit in Database',
        status: 409
      });
  }, function (err) { // Not Error in this case, but means username was not found exisiting in our database so we are good to register.
      connect(function(con) {
        var passwordData = bcrypt.hashSync(req.body.password, salt);
        var q = "insert into user (`first_name`, `last_name`, `email`, `username`, `password`, `is_admin`) values (?, ?, ?, ?, ?, ?)";
        var values = [req.body.first_name, req.body.last_name, req.body.email, req.body.username, passwordData, '0'];
        try {
         con.query(q, values, function (err, result, fields) {
           if (err) {
             res.json({success: false, msg: 'Failed to register', error: err});
           }else{
             res.json({success: true, msg: 'User registered'});
           }
         });
        }catch(err) {
          console.log(`ERROR: registering a new user, ${err}`);
        }
      });
  });
});


// Authenticate
router.post('/authenticate', (req, res, next) => {
  db.findUser({
    username: req.body.username
  }, function (response) {
      // Store Found user info in Obj
      var user = {
        is_admin: response.is_admin,
        user_id: response.id,
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        username: response.username
      };
      bcrypt.compare(req.body.password, response.password, function(err, answer) {
        if (err) throw err;
        if (answer == true) { // give our token
          var token = jwt.sign(user, credentials.cookieSecret, {
            expiresIn: 10800 // in seconds, 3 hours
          });
          res.status(200).json({
            success: true,
            token: 'JWT ' + token,
            user: user
          });
        }else {
          res.json({
            success: false,
            msg: 'Authentication failed. Passwords did not match.',
            status: 401
          });
        }
      });
  }, function (err) {
      res.json({
        success: false,
        msg: 'Authentication failed. User not found.',
        status: 401
      });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user});
});

// Stores message left by the user on the contact page
router.post('/contact', (req, res, next) => {
  connect(function(con) {
    var datetime = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    // var now = new Date().getTime();
    // var datetime = moment(now).format('YYYY-MM-DD HH:mm:ss');
    var q = "insert into contact (`user_id`, `message`, `created_at`, `is_read`) values (?, ?, ?, ?)";
    var values = [req.body.user_id, req.body.message, datetime, '0'];
    try {
      con.query(q, values, function(err, result, fields) {
        if (err) {
          res.json({
            success: false,
            msg: `Error saving the message, ${err}`,
            status: 401
          });
        }else {
          res.json({
            success: true,
            msg: 'Thanks for leaving me a message, I will get back to you soon!'
          });
        }
      });
    }catch(err) {
      console.log(`ERROR: saving contact me message ${err}`);
    }
  });
});


router.get('/messages', (req, res, next) => {
  connect(function(con) {
    var q = "select user.first_name, user.last_name, user.email, contact.id, contact.created_at, contact.message from contact left join user on contact.user_id = user.id where contact.is_read = 0 order by contact.created_at desc";
    try {
      con.query(q, (err, result, fields) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Error getting messages',
            status: 401
          });
        }else {
          var data = [];
          for (var i = 0; i < result.length; i++) {
            data.push({
              id: result[i].id,
              first_name: result[i].first_name,
              last_name: result[i].last_name,
              email: result[i].email,
              created_at: moment(result[i].created_at).format('YYYY-MM-DD HH:mm:ss'),
              message: result[i].message
            });
          }
          res.status(200).json({
            success: true,
            messages: data
          });
        }
      })
    }catch(err) {
      console.log(`ERROR: could not get messages ${err}`);
    }
  });
});


router.post('/read', (req, res, next) => {
  connect(function(con) {
    var q = "update contact set is_read = 1 where id = ?";
    var values = [req.body.id];
    try {
      con.query(q, values, (err, result, fields) => {
        if (err) {
          res.json({
            success: false,
            msg: 'Error getting messages',
            status: 401
          });
        }else {
          res.status(200).json({
            success: true,
            msg: "Marked as Read"
          });
        }
      });
    }catch(err) {
      console.log(`ERROR: could not update record ${err}`);
    }
  });
});

module.exports = router;
