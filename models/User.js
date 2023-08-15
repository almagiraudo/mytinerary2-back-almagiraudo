import {model, Schema} from 'mongoose';

let collection = 'users'
let schema = new Schema({
    name: {type: String, required:true },
    lastname: {type: String }, //si es opcional no necesito agregar el requiered
    mail:{type: String, required: true, unique:true }, //unque: compureba que el email SEA UNICO
    photo:{type:String, default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},
    password:{type:String, required:true},
    country:{type:String, required:true}
})
let User = model(collection, schema)
export default User;