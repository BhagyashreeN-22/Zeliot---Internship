import express from "express";
import { usersignUp, signupget } from "../controller/controller_user.js";

const user_router = express.Router();

user_router.post("/", usersignUp);
user_router.get("/", signupget);

export default user_router;
