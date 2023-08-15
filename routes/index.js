import express from "express";

import userRouter from './users.js'


let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//obligo al enrutador principal a usar las rutas del enrutador
router.use('/users', userRouter)

export default router
