import joi from "joi"
import {joiPasswordExtendCore} from "joi-password"


let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please",
        'string.max':"name must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "name can not be empty",
        'any.required':"name is required"

    }),
    mail: joi.string().required().min(5).max(30).messages({
        'string.min': "mail must have at least 3 characters please",
        'string.max':"mail must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "mail can not be empty",
        'any.required':"mail is required"
    }),
    password: joi.string()
    .required()
    /* .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces() */
    .min(6)
    .max(15)
    .messages({
        'string.min': "password must have at least 6 characters please",
        'string.max':"password must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "password can not be empty",
       /*  'sting.minOfLowerCase': "the password must contain at least one lower case character",
        'string.minOfUpperCase': "the password must contain at least one upper case character",
        'string.minOfNumeric': "the password must contain at least one number", */
        'any.required':"password is required"
    }),
    country: joi.string().required().min(3).max(20).messages({
        'string.min': "country must have at least 3 characters please",
        'string.max':"country must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "country can not be empty",
        'any.required':"country is required"
    }),
    lastName: joi.string().min(3).max(20).empty('').messages({
        'string.min': "last name must have at least 3 characters please",
        'string.max':"last name must have less less than 20 characters or be equal to 20 characters please!"
    })

})

export default registerSchema