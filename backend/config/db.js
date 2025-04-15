import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://mayurlalparawork:mayur1406@cluster0.00zu7.mongodb.net/food-del').then(()=>{
        console.log("connected")
    })
}