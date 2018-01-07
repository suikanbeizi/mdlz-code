const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const settings = require('./Settings');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
// const expressLayouts = require('express-ejs-layouts');//layout
const fs = require('fs');
// const accessLogfile = fs.createWriteStream('access.log',{flags:'a'});//visit log
// const errorLogfile = fs.createWriteStream('error.log',{flags:'a'});//error log

const index = require('./routes/index');
// var users = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger({stream:accessLogfile}));//log
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressLayouts);//layout
// app.use('/users', users);

//session
// app.use(session({
//     secret: settings.cookieSecret,
//     store: new MongoStore({
//         db:settings.db,
//         url: 'mongodb://localhost/blog'
//     }),
//     cookie: { maxAge: 24*60*60 }
// }));
app.use(flash());//错误提示

//增加视图
// app.use(function(req, res, next){
//     const error = req.flash('error');
//     const success = req.flash('success');
//     res.locals.user = req.session.user;
//     res.locals.error = error.length ? error : null;
//     res.locals.success = success ? success : null;
//     next();
// });
app.use('/', index);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{title:"404"});
});

module.exports = app;
