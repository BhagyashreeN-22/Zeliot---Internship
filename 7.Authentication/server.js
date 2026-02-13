import express from "express";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js"
import "./config/db.js";

dotenv.config();

const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",router);

app.listen(process.env.PORT,()=>{
    console.log("Server started");
});

