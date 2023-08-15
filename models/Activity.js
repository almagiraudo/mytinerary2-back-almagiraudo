import {model, Schema} from 'mongoose';

let collection = "activities"
let schema = new Schema({
    name:{type:String, requied:true},
    photo:{type:String, requied:false},
    itinerary_id:{type:Types.ObjectId, required:true, ref:''}
})

let Activity = model(collection, schema)
export default Activity;