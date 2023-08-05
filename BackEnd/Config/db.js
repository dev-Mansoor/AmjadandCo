import mongoose from "mongoose";
import colors from "colors";


const DbConnection = ()=>{
    try{
        let conn =  mongoose.connect("mongodb://127.0.0.1:27017/AmjadAndCo")
        console.log("DB connection established".bgBlue)
    } catch(error)
    {
        console.log("Error in DB connection")
    }
}

export default DbConnection