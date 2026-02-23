import users from '../models/models_users.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register =async (req,res)=>{
    try{
        const user_name =req.body.name;
        const password =req.body.password;
        const hashedpassword = await bcrypt.hash(password,10);
        const result = await users.create({
            user_name:user_name,
            password:hashedpassword
        });
        res.status(200).json({
           message:"Successful Registration",
           users:{
            user_id:result.user_id,
            user_name:result.user_name
           }
        }); 

    }catch(error){
        res.status(500).json({
            message:"Registration failed",
            error:error.message
        });

    }
};

export const login =async(req,res)=>{
    try{
        const user_name = req.body.name;
        const password = req.body.password;
        const findUser = await users.findOne({
            where :{user_name:user_name}
        });
        if(!findUser){
            return res.status(404).json({
                message:"Not found"
            });
        };
        const isMatch = await bcrypt.compare(password,findUser.password);
        if(!isMatch){
           return res.status(401).json({
                message:"Invalid password"
            });
        };

        const token = jwt.sign(
            {user_id:findUser.user_id , user_name:findUser.user_name},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        );
       
        res.status(201).json({
            message:"Successful Login!",
            token:token,
            user:{
                user_id:findUser.user_id,
                user_name:findUser.user_name
            }
        });
    }catch(error){
        res.status(500).json({
            message:"login failed",
            error:error.message
        });
    }
};
