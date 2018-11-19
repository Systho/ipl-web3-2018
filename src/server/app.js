const createError = require('http-errors');
const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
var jwt = require('jsonwebtoken');

const assetPath = require('./asset_path.js');

const db = require('./modules/db.js');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const messagesRouter = require('./routes/messages');
const sessionsRouter = require('./routes/sessions');

const projectRoot = path.join(__dirname, '../..');
const serverRoot = path.join(__dirname, '.');

const app = express();

const jwtSecret = process.env.JWT_SECRET;

// Connect to DB, and insert default user if necessary
db.connect().then((db) => {
  let collection = db.collection('users');
  collection.countDocuments().then((res) => {
    if (res === 0) {
      collection.insertOne({
        login: 'laurent',
        password: 'laurent',
        firstName: 'Laurent',
        lastName: 'Leleux'
      }).catch((err) => {
        console.log('[App] Unable to insert default user');
      });
    }
  })
});

const authMiddleware = (req, res, next) => {
  var token = req.get('authorization');
	if (!token) {
		res.status(401).send('A token is mandatory');
		return;
	}
	jwt.verify(token, jwtSecret, (err, decoded) => {
		if (err) {
			res.status(401).send('Unable to parse token');
			return;
		}
		if (decoded.exp <= Date.now()) {
			res.status(401).send('Token has expired');
			return;
		}
    req.token = decoded;
    next();
	});
}

app.locals.assetPath = assetPath;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  sassMiddleware({
    src: path.join(serverRoot, 'public'),
    dest: path.join(serverRoot, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../dist')));

app.use('/', indexRouter);
app.use('/api/sessions', sessionsRouter);
app.use(authMiddleware);
app.use('/api/users', usersRouter);
app.use('/api/messages', messagesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
