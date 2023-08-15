import Itinerary from "../../models/Itinerary.js";


export default async(req, res)=>{
    try{
        let updateItinerary = await Itinerary.findByIdAndUpdate(
            req.params.i_id,
            req.body,
            {new:true}
        ).select('name price duration tags photo')
        return res.status(200).json({
            success: true,
            message:'itinerary updated',
            response: updateItinerary
        })
    }catch(error){
        return res.status(400).json({
            success:false,
            message:'not updated',
            response:null
        })
    }
}