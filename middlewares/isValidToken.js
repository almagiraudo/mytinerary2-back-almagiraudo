import jwt from 'jsonwebtoken'

export default(req,res,next)=>{
    try {
        let token = jwt.sign(
            {mail:req.user.mail},//objeto a convertir en token
            process.env.SECRET_KEY,          //PALABRA QUE SIRVE DE LLAVE PARA TOKENIZAR
            {expiresIn: 60*60*24*1}
        )
        req.token= token
        console.log(req.token);
        return next()
    } catch (error) {
        return next(error)
    }
}