import mongoose from "mongoose";

const {MONGODB_URI} = process.env;

if(!MONGODB_URI){
    throw new Error("MONGODB_URI must be defined")
}

export const connectDB = async ()=>{
    try{
        console.log('Connecting to MongoDB:', MONGODB_URI);
        const {connection} = await mongoose.connect(MONGODB_URI)
        console.log('MongoDB connection successful:', connection.host);
        if(connection.readyState === 1){
            console.log("MongoDB Connected")
            return Promise.resolve(true)
        }
    

    }catch(error){
        console.error('MongoDB connection error:', error);
        return Promise.reject(error)
    }
   
}