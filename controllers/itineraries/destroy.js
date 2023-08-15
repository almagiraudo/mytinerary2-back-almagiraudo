import Itinerary from "../../models/Itinerary.js";

export default async (req, res)=>{
    try{
        let deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message:'object deleted',
            response: deletedItinerary

        })
    }catch(err){
        return res.status(400).json({
            success: false,
            message:'could not delete object',
            response: null
        })
    }
}