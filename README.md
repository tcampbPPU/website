# MEANauthapp

MySQL Express Angular Nodejs stack application with authentication using JSON web tokens

### Installation

Create `credentials.js` in the main directory

The credentials file should look similar to this:

```
module.exports = {
  port: SOME_PORT,
  url: "YOUR_URL",
  host: "DB_HOST_URL",
  user: "DB_USER",
  password: "DB_PASSWORD",
  database: "DB"
};
```

Install the dependencies

```sh
$ npm install
```

Run app

```sh
$ npm start
```

### Setting up Angular 7

Enter Angular Src
```sh
$ cd angular-src/
```

Install Angular Node Module Dependencies
```sh
$  npm install
```


Run the Angular CLI, make sure still inside `angular-src/`
```sh
$ ng serve --open
```
