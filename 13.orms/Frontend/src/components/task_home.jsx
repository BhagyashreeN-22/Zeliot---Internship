import axios from "axios";
import { useEffect, useState } from "react";

const Task = () => {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('todo');
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');


  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/task/tasks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data.tasks); 
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch tasks");
    }
  };
  useEffect(() => {
    fetchTasks();
  }, [token]);

  const addTask = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/task/addtask",
        { task_name: taskName, task_status: status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Task added successfully ");
      setTaskName('');
      setStatus('todo');

      fetchTasks();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add task");
    }
  };


  const deleteTask = async (task_id) => {
    try {
      await axios.delete(`http://localhost:3000/task/delete/${task_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks(); 
      alert("Task deleted successfully ");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to delete task ");
    }
  };

  const updateStatus = async (task_id, currentStatus) => {
    try {
      const newStatus = currentStatus === "todo" ? "complete" : "todo";

      await axios.put(
        `http://localhost:3000/task/update/${task_id}`,
        { task_status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchTasks(); 
      alert("Task status updated ");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to update status ");
    }
  };

  return (
    <div className="task-container">
      <div className="Add-task-container">
        <h1>Tasks</h1>
        <form className="add-task-form" onSubmit={addTask}>
          <input
            type="text"
            value={taskName}
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
          <label>
            <input
              type="radio"
              value="todo"
              checked={status === "todo"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Todo
          </label>
          <label>
            <input
              type="radio"
              value="complete"
              checked={status === "complete"}
              onChange={(e) => setStatus(e.target.value)}
            />
            Complete
          </label>
          <p>Selected: {status}</p>
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>

      <div className="ShowTask">
        {tasks.length === 0 ? (
          <p>No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <div key={task.task_id} className="task-item">
              <h3>{task.task_name}</h3>
              <p>Status: {task.task_status}</p>

              <button
                onClick={() => updateStatus(task.task_id, task.task_status)}
              >
                Mark {task.task_status === "todo" ? "Complete" : "Todo"}
              </button>

              <button onClick={() => deleteTask(task.task_id)}>Delete</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Task;
