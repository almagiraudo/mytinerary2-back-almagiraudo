import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.city_id) {
            queries.city_id = req.query.city_id
        } console.log(queries)

        let allItineraries = await Itinerary.find(queries, '-__v -createdAt -updatedAt')
            .populate({
                path: 'city_id',
                select: 'city photo',
                populate: {
                    path: 'admin_id',
                    select: 'name photo'
                }
            })

        return res.status(200).json({
            success: true,
            message: 'itineraries found ',
            response: allItineraries
        })
    } catch (error) {
        next(error)


    }
}