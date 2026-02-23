import express from 'express';
const task_route =express.Router();
import { addTask,updateStatus,deleteTask ,showtask} from '../controller/cont_task.js';
import { verifyToken } from '../middleware/auth.js';

task_route.get('/tasks',verifyToken,showtask);
task_route.post('/addtask',verifyToken,addTask);
task_route.patch('/update/:task_id',verifyToken,updateStatus);
task_route.delete('/delete/:task_id',verifyToken,deleteTask);

export default task_route;