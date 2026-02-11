import express from "express"
import { getAllUser,getUserByName,createUser,updateUserByName,deleteUser } from "../controller/controller_user.js";
const routes  = express.Router();

routes
.route("/")
.get(getAllUser)
.post(createUser);

routes
.route("/firstName")
.get(getUserByName)
.patch(updateUserByName)
.delete(deleteUser);

export default routes;
