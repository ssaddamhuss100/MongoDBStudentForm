import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();  // This loads the environment variables

//connect to mongoDB server remote
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(' Connected to MongoDB database');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export default connectDB;

