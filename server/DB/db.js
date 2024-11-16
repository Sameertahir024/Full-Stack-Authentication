import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connected");
  } catch (error) {
    console.error("Error");
  }
};

export default connect;
