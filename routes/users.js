import express from "express";
import create from "../controllers/users/create.js";
import update from "../controllers/users/update.js";
import read from "../controllers/users/read.js";
import destroy from "../controllers/users/destroy.js"
import readOne from "../controllers/users/readOne.js";

let router = express.Router();


//CREATE
router.post('/', create)
//READ
router.get('/', read)
//READONE
router.get('/:_id',readOne)
//UPDATE
router.put('/:u_id', update)
//DESTROY
router.delete('/:id',destroy)

export default router

