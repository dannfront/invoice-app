import mongoose from "mongoose";

const billFromSchema=new mongoose.Schema({
   
    StreetAddres:{
        type:String,
        required:[true,"StreetAddres field is required"]
    },
    city:{
        type:String,
        required:[true,"city field is required"]
    },
    postCode:{
        type:String,
        
        required:[true,"postCode field is required"]
    },
    country:{
        type:String,
        required:[true,"country field is required"]
    }
})



const billFromModel=mongoose.model('BillFrom',billFromSchema)


export default billFromModel