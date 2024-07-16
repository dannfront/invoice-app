import mongoose from "mongoose";

export default async function connectDb(url){
    try {
        await mongoose.connect(url)
        console.log('connected to data base');
    } catch (error) {
        console.log("error connecting to the database");
    }
}