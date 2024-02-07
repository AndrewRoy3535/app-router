import mongoose from "mongoose";

const connection = async () => {
  if (!process.env.ATLAS_URI) {
    throw new Error("Invalid or missing env variables: 'ATLAS_URI'");
  }
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MDB");
  } catch (error) {
    console.log("Connection Error:", error);
  }
};

connection().catch((err) => console.log(err));

export default connection;
