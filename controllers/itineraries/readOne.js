import Itinerary from "../../models/Itinerary.js";

export default async(req, res)=>{
    try{
        let oneItinerary = await Itinerary
        .findOne({_id:req.params._id})
        .select('name price duration tags photo')

        return res.status(200).json({
            success: true,
            message:'itinerary found',
            response: oneItinerary
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            message:'not found',
            response: null
        })
    }
}