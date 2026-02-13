import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticate = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({message:"token missing"});
    }

    const token =authHeader.split(" ")[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user =decoded;
        next();
    }catch(error){
        return res.status(403).json({message:"Invalid token "});
    }
};

export const authorize =(role)=>{
    return (req,res,next)=>{
        if(req.user.role!==role){
            return res.status(403).json({message:"Access deined"});
        }
        next();
    };
};
