import User from "../../models/User.js";

export default async (req, res)=>{{

    try{
    let newUser = await User.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'user created',
      response: newUser
    })
  } catch(err){
    console.log(err)
    return res.status(400).json({
      succes: false,
      message: 'not created',
      response: null
    })
  }
    
}}