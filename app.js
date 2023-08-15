import 'dotenv/config.js'
import __dirname from './utils.js';
//var createError = require('http-errors');
import createError from 'http-errors'; //crear errores
//var express = require('express');
import express from 'express';     //provee metodos y propiedades para levantar servidores
//var path = require('path');
import path from 'path';  //no va a dar la ruta principal de nuestro servidor
//var cookieParser = require('cookie-parser');
//import cookieParser from 'cookie-parser';
//var logger = require('morgan');
import logger from 'morgan';
//var indexRouter = require('./routes/index');   //solo vaamoss a configurar las rutas de enrutador de back principal
 import indexRouter from './routes/index.js'                                           // este enrutador va a llamar a todods los otros recursos

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //obligo al servidor a usar ls archivos estaticos de la carpeta public

//ROUTER  
app.use('/api', indexRouter); //obligo al servidor a que use las rutas del enrutador principal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
