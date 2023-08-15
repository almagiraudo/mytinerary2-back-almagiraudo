import Citie from "../../models/City.js";

export default async(req, res)=>{
    try{ 
        let allCities = await Citie.find()
        return res.status(200).josn({
            success: true,
            message:'citie found',
            response: allCities
        })

    }catch(error){
        return res.status(400).json({
            success: false,
            message:'not found',
            response: null
        })
    }
}