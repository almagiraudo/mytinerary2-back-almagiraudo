import Activity from "../../models/Activity.js";


export default async (req, res, next) => {
    /*  try {
         let queries = {}
         if (req.query.itinerary_id) {
             queries.itinerary_id = req.query.itinerary_id
         } console.log(queries)
 
         let allActivities = await Activity.find(queries)
             .populate({
                 path: 'itinerary_id',
                 select: 'city photo'
             })
         return res.status(200).json({
             success: true,
             message: 'activities found',
             response: allActivities
         })
 
     } catch (error) {
         next(error)
     }
 } */
    /* try {
        let objectSearch = {}
    
    
        if (req.query.itinerary_id) {
            objectSearch.itinerary_id = req.query.itinerary_id
            
        }
    
    
        let allActivities = await Activity.find()
        .find(objectSearch,'name  photo itinerary_id ')
        .populate('itinerary_id','name photo')
    
    
    
        if (allActivities.length>0) {
            return res.status(200).json({
                success: true,
                message: 'activities found',
                response: allActivities
            })}else {
                return res.status(404).json({
                    success: false,
                    message: 'not found',
                    response: null
                })
            } 
    } catch (error) {
        next(error)
    }
    } */

    try {
        let queries = {}
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }
        let allActivities = await Activity.find(queries)
            .populate({
                path: "itinerary_id",
                select: "_id name photo"
            })

        return res.status(200).json({
            success: true,
            message: "Activities found!",
            response: allActivities,
        });
    } catch (error) {
        next(error)
    }
};
