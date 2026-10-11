import mongoose from"mongoose";
import dotenv from"dotenv";
const DB_URL=process.env.DB_URL;
let db;
export async function connectDB(){
    if(!db){
        db=await mongoose.connect(DB_URL);
    }
    return db;
}