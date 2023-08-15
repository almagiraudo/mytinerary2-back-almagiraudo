import express from "express";
import create from "../controllers/activities/create.js";
import update from "../controllers/actitivies/update.js";
import read from "../controllers/activities/read.js";
import destroy from "../controllers/activities/destroy.js";
import readOne from "../controllers/actitivies/readOne.js";

let router = express.Router();

//CREATE
router.post('/',create)
//READ
router.get('/',read)
//READ ONE
router.get('/:_id',readOne)
//UPDATE
router.put('/:a_id',update)
//DESTROY
router.delete('/:id',destroy)