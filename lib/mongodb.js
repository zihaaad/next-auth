import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected To MONGODB");
  } catch (error) {
    console.log(error);
  }
};
