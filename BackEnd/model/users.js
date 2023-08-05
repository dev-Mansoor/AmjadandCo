import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,
    } ,

    username: {
        type : String,
        required: true,
        unique : true,
    },

    password: { 
        type : String,
        required: true,
    },

    role: {
        type: String,
        default: "Customer",
        enum : ["Customer", "admin", "manager"]
    }
 })

 export default mongoose.model('Users', UserSchema)