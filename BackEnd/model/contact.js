import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    
    name:{
        type : String,
    } ,

    
    phone: { 
        type : String,
    },
    
    email: {
        type : String,
    },
 })

 export default mongoose.model('Contact', ContactSchema)