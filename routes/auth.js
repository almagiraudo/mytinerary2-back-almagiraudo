import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import validPassword from "../middlewares/validPassword.js";


let auth_router = Router()

auth_router.post('/signup',validator(registerSchema),existsUser,validPassword,register)

export default auth_router;