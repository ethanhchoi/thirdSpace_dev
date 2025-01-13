import mongoose from "mongoose";

export const connectDB = async() => {
    try
    {
        console.log(process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected with ${conn.connection.host}`);
        return conn;
    }
    catch(error)
    {
        console.log(`There was an error: ${error.message}`);
        process.exit(1);//1 = Failre //0 = Success
    }
}