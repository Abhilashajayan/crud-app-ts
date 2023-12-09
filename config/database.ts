import mongoose from 'mongoose';
import { config } from 'dotenv';

config(); 

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected successfully to MongoDB');
  } catch (err : any) {
    console.error('Failed to connect to MongoDB:', err);
  }
}

export default connectToMongoDB;
