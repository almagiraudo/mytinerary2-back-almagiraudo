import City from "../../models/City.js";

export default async(req, res)=>{
    try{
        let deletedCity = await City.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message:"city deleted",
            response: deletedCity,
        })
    }catch(error){
        return res.satatus(400).json({
            succes:false,
            message: 'not deleted',
            response: null
        })
    }
}