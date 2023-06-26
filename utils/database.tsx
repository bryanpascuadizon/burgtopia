import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  //Check if MongoDB is already connected
  if (isConnected) {
    console.log("MongoDB is already conencted");
    return;
  }

  try {
    //Check if MongoDB_URI exists in env file
    const mongoURI: string = process.env.MONGODB_URI
      ? process.env.MONGODB_URI
      : "";

    await mongoose.connect(mongoURI, {
      dbName: "db_burgtopia",
    });

    isConnected = true;
    console.log("MongoDB is connected")
  } catch (error) {
    console.error("MongoDB error: ", error);
  }
};
