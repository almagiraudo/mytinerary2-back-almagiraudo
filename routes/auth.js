import { Router } from "express";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";
import register from "../controllers/auth/register.js";
import notExistUser from "../middlewares/notExistUser.js";
import token from "../controllers/auth/token.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import validPassword from "../middlewares/validPassword.js";
import signinSchema from "../schemas/signin.js";
import signIn from "../controllers/auth/signIn.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
let auth_router = Router()

auth_router.post('/signup',validator(registerSchema),existsUser,validPassword,register)
auth_router.post('/signin',validator(signinSchema),notExistUser,isPassOk,isValidToken, signIn)
auth_router.post('/token', passport.authenticate('jwt',{session:false}), isValidToken,token)
auth_router.post('/signout',passport.authenticate('jwt',{session:false}),signout)
export default auth_router;