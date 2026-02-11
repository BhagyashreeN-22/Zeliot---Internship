import express from  "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js"

const port =8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose
  .connect("mongodb://127.0.0.1:27017/database-2")
  .then(() => console.log("Successful connection"))
  .catch(err => console.log(err));

app.use("/api/users", routes);

app.listen(port, () => {
  console.log("server started");
});

