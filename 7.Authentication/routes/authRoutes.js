import express from "express";
import dotenv from "dotenv";
import { authenticate,authorize } from "../middleware/authMiddleware.js";
import { register,login } from "../controller/controller.js";

dotenv.config();
const router =express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/profile",authenticate,(req,res)=>{
    res.json({
        message: "Welcome user",
        user: req.user
    });
});
router.get("/admin",authenticate,authorize("admin"),(req,res)=>{
        res.json({
        message: "Welcome Admin"
    });
})

export default router;