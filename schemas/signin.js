import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(30).messages({
        'string.min': "mail must have at least 3 characters please",
        'string.max':"mail must have less less than 20 characters or be equal to 20 characters please!",
        'string.empty': "mail can not be empty",
        'any.required':"mail is required"

    }),
    password: joi.string().required().min(8).max(20).messages({
    'string.min': "password must have at least 3 characters please",
    'string.max':"password must have less less than 20 characters or be equal to 20 characters please!",
    'string.empty': "password can not be empty",
    'any.required':"password is required"

    }) 
})

export default signinSchema;