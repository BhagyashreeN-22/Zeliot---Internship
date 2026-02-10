import mongoose from "mongoose";

export async function connectMongoDB() {
  connectMongoDB("mongodb://127.0.0.1:27017/url-shortner")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.error(err));
}
