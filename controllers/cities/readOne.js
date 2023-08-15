import User from "../../models/User.js";

export default async(req, res)=>{
    try{
        let oneCitie = await User.findOne({_id:req.params.id}).select("country photo city")
        return res.status(200).json({
            success:true,
            message: 'citie found',
            response: oneCitie
        })
    }catch(error){
        return res.status(400).json({
            success: false,
            message:'not found',
            response: null
        }) 
    }
} 