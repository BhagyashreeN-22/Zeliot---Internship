import express from "express";
import { connectMongoDB } from "./connect.js";
import urlRouter from "./routers/url.js";

const app = express();
app.use(express.json());

const PORT = 5000;
connectMongoDB("mongodb://127.0.0.1:27017/url-shortner")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => console.error(err));
app.use("/url", urlRouter);

app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`);
});
