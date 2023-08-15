import City from "../../models/City.js";

export default async(req, res)=>{
    try{ 
        let allCities = await City.find()
        return res.status(200).josn({
            success: true,
            message:'city found',
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