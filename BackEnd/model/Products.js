import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    
    name:{
        type : String,
    } ,

    description: {
        type : String,
    },

    img: { 
        type : String,
    },

 })

 export default mongoose.model('Products', ProductSchema)