import mongoose from "mongoose";

export async function connectDatabase(){
    if(mongoose.connection.readyState === 0){
        try{
            await mongoose.connect(process.env.MONGO_URL || "");
            console.log("Connected to MongoDB");
        }catch(e){
            console.error(e);
        }
    }
}