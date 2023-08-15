import express from "express";
import create from "../controllers/cities/create.js";
import update from "../controllers/cities/update.js";
import read from "../controllers/cities/read.js";
import destroy from "../controllers/cities/destroy.js";
import readOne from "../controllers/cities/readOne.js";

let router = express.Router();

//CREATE
router.post('/', create)
//READ
router.get('/',read)
//READONE
router.get('/', readOne)
//UPDATE
router.put('/',update)
//DESTROY
router.delete('/',destroy)

export default router
