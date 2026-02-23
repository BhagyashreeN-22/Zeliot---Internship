import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from "express";
import sequelize from "./config/db.js";
import { users, tasks } from "./models/index.js";
import user_route from "./router/user_router.js";
import task_route from "./router/task_router.js";

console.log(process.env.JWT_SECRET);

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); 
    console.log("Tables synced successfully!");
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use('/user',user_route);
    app.use('/task',task_route);

    app.listen(PORT, () => {
      console.log("Server running on port 5000");
    });
  } catch (err) {
    console.error(err);
  }
}

startServer();
