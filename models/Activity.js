import {model, Schema, Types} from 'mongoose';

let collection = "activities"
let schema = new Schema({
    name:{type:String, requied:true},
    photo:{type:String, requied:true},
    itinerary_id:{type:Types.ObjectId, required:true, ref:'itineraries'}
})

let Activity = model(collection, schema)
export default Activity;