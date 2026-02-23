import  sequel  from "../config/db.js";
import { DataTypes } from "sequelize";
import users from "./models_users.js"

const tasks = sequel.define("tasks",{
    task_id:{
       type: DataTypes.INTEGER,
       autoIncrement : true,
       primaryKey:true
    },
    task_name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    task_status:{
        type: DataTypes.ENUM("todo", "completed"), 
        defaultValue: "todo",                       
        allowNull: false
    },
    user_id:{
        type:DataTypes.INTEGER,
        onDelete:"CASCADE",
        references:{model:users,key:"user_id"}
    }
});
export default tasks;