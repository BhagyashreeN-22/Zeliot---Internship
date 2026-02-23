import sequel from "../config/db.js";
import { DataTypes } from "sequelize";

const users = sequel.define("users",{
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    user_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default users;