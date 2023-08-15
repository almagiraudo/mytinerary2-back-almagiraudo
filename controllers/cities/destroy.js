import Citie from "../../models/City.js";

export default async(req, res)=>{
    try{
        let deleteCitie = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message:"citie deleted",
            response: deletedCitie,
        })
    }catch(error){
        return res.satatus(400).json({
            succes:false,
            message: 'not deleted',
            response: null
        })
    }
}