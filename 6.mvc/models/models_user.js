import mongoose from "mongoose";

const userschema = mongoose.Schema({
    firstName:{
        type: String,
        required : true
    },
    email:{
        type:String,
        unique:true
    },
    gender:{
        type:String,
    }
});

const User = mongoose.model("User",userschema);
export default User;