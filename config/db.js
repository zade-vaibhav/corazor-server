import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {

    console.log("mongo_connection");

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;
