import express from "express";

import userRouter from './users.js'
import citiesRouter from './cities.js'
//import itinerariesRouter from './itineraries.js'
//import activitiesRouter from './activities.js'


let router = express.Router();


//obligo al enrutador principal a usar las rutas del enrutador
router.use('/users', userRouter)
router.use('/cities',citiesRouter)
//router.use('/itinerary', itinerariesRouter)
//router.use('/actiivities', activitiesRouter)


export default router
