import mongoose from "mongoose";

const QouteSchema = mongoose.Schema({

  Qno: String,
  Date: String,
  Ms: String,
  Data: [{
    Sr: String ,
    Description: String,
    Qty: Number ,
    Unit: String ,
    UnitRate: Number ,
    Amount: Number ,
  }]


})

export default mongoose.model('NewQoutes', QouteSchema)