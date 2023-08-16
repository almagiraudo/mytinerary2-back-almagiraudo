import City from "../../models/City.js";

export default async(req, res)=>{
    try{
        let oneCity = await City
        .findOne({_id:req.params.id})
        .select("country  city photo")
        console.log(oneCity)
        return res.status(200).json({
            success:true,
            message: 'city found',
            response: oneCity
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({
            success: false,
            message:'not found',
            response: null
        }) 
    }
} 