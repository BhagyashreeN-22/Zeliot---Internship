import react from "react";
import Todolist from "./Todo_items/todo.jsx";

const Todo :react.FC = ()=>{
  return (
    <ul>
    <Todolist title="Eat"/>
    <Todolist  title="sleep"/>
    <Todolist title="code"/>
    <Todolist title="repeat"/>
    </ul>
  )
}
export default Todo;