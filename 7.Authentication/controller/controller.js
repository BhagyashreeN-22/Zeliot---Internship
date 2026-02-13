import db from "../config/db.js"
import bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken";
import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
export const register = async (req,res)=>{
  const {email,password,role} =req.body;
  const hashedpassword = await bcrypt.hash(password,10);
  const sql = "INSERT INTO users (email,password,role) VALUES (?,?,?)";

  db.query(sql,[email,hashedpassword,role|| "user"],(err,result)=>{
    if(err){
        return res.status(400).json({message:err.message});
    }
    res.json({message:"User registered successfully"});
  });
};

export const login = async(req,res)=>{
    const {email,password} =req.body;
    const sql ="select * from users  where email=?";
    db.query(sql,[email],async(err,result)=>{
        if(err) return res.status(400).json({message:"user not found"});
        const user =result[0];
        const ismatch = await bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.status(400).json({message:"wrong password"});
        }
        const token = jwt.sign(
            {
                id:user.id,
                role:user.role
            },
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );
        res.json({token});
    });
};


