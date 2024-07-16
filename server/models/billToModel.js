import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail";
import itemsSchema from "./itemsModel";

const billToSchema=new mongoose.Schema({
    clientName:{
        type:String,
        required:[true,"clientName field is required"]
    },
    clientEmail:{
        type:String,
        required:[true,"clientEmail field is required"],
        validate:[isEmail,"please provided a valid email"]
    },
    streetAdress:{
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
    },
    invoiceDate:{
        type:String,
        required:[true,"invoiceDate field is required"]
    },
    paymenstItems:{
        type:String,
        required:[true,"paymenstItems field is required"]
    },
    projectDescription:{
        type:String,
        required:[true,"projectDescription field is required"]
    },
    itemsList:[itemsSchema]
})


const billToModel=mongoose.model("billTo",billToSchema)


export default billToModel