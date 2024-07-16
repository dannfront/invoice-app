import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    name:String,
    quantity:{
        type:Number,
        validate:{
            validator:function(v){
                return v>0
            },
            message:()=>'the quantity must be greater than 0'
        }
    },
    price:{
        type:Number,
        validate:{
            validator:function(v){
                return v>0
            },
            message:()=>'the price must be greater than 0'
        }
    },
    total:Number
})
export default itemsSchema