import express from "express";
import create  from "../controllers/itineraries/create.js";
import update from "../controllers/itineraries/update.js";
import read from "../controllers/itineraries/read.js";
import destroy from "../controllers/itineraries/destroy.js";
import readOne from "../controllers/itineraries/readOne.js";

let router = express.Router();

//CREATE
router.post('/', create)
//READ
router.get('/', read)
//READONE
router.get('/:_id',readOne)
//UPDATE
router.put('/:i_id',update)
//DESTROY
router.delete('/:id', destroy)

export default router