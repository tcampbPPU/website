// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const credentials = require('./credentials');
const connect = require('./connect');

// Initiate Server
const app = express();

// Users Route
const users = require('./routes/users');

// Sets port for application to run on
app.set('port', process.env.PORT || credentials.port || 3000);

// For other domains to access, will require authentication from user token
app.use(cors());

// Set Static Folder for Angular
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middlewear
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

// Allow for Routes
app.use('/users', users);

// Route to Index
app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Run Server
app.listen(app.get('port'), () => {
  console.log(`Server listening on ${app.get("port")} press Ctrl-C to terminate`);
});
