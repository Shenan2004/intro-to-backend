import mongoose from "mongoose";
import dotenv from "dotenv";


const connectDB = async () => { // async wait till a task to finish
    try {
        const connectionIstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !!!
            ${connectionIstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed !!!");
        process.exit(1)
    }
}



export default connectDB;