import tasks from '../models/models_tasks.js';

export const addTask = async(req,res)=>{
    try{
        const task_name = req.body.name;
        const task_status = req.body.status;
        const result =await tasks.create({
            task_name:task_name,
            task_status:task_status,
            user_id:req.user.user_id
        });
        res.status(200).json({
            message:'Successfully created task',
            task:{
                task_id:result.task_id,
                task_name:result.task_name,
                task_status:result.task_status
            }
        });

    }catch(error){
        res.status(500).json({
            messge:"Failed to add task",
            error:error.message
        });
    }
}

export const updateStatus =async (req,res)=>{
    try{
        const updateTask = req.params.task_id;
        const result = await tasks.findOne({
            where: {task_id : updateTask,
                 user_id: req.user.user_id   
                }
        });
        if(!result){
            return res.status(500).json({
                message:'task not found',
            });
        }
        const newStatus = result.task_status === 'todo' ? 'completed':'todo';
        
        await result.update({
            task_status:newStatus
        })

        res.status(200).json({
            message:'Updated Successfully',
            task:{
                task_id:result.task_id,
                task_name:result.task_name,
                task_status:result.task_status
            }
        });

    }catch(error){
        res.status(501).json({
            message:"failed to update status",
            error:error.message
        });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const dtask = req.params.task_id;

        const result = await tasks.findOne({
            where: { 
                task_id: dtask,
                user_id: req.user.user_id   
            }
        });

        if (!result) {
            return res.status(404).json({
                message: 'Task not found',
            });
        }

        await result.destroy();

        return res.status(200).json({
            message: 'Task deleted successfully',
            deletedTaskId: dtask
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete task",
            error: error.message
        });
    }
};

export const showtask = async (req, res) => {
    try {
        const userId = req.user.user_id;

        const allTasks = await tasks.findAll({
            where: { user_id: userId }
        });

        return res.status(200).json({
            message: "Tasks fetched successfully",
            count: allTasks.length,
            tasks: allTasks
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch tasks",
            error: error.message
        });
    }
};
