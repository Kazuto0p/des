import mongoose from "mongoose";


export default async function Connection(){

    const db = await mongoose.connect("mongodb://localhost:27017/MobileDB")
    console.log("DataBase connected")
}


