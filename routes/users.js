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
router.get('/',readOne)
//UPDATE
router.put('/', update)
//DESTROY
router.delete('/',destroy)

export default router

