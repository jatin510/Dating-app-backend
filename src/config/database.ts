import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    console.log('Connecting to mongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection successful !`);
  } catch (error) {
    console.error(`MongoDB connection error`);
  }
};

export default dbConnection;
