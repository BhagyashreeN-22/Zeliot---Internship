import React from "react";
import Todolist from "./Todo_items/todo.jsx";

interface TodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  items: TodoItem[];
}

const Todo: React.FC<TodoProps> = ({ items }) => {
  return (
    <ol>
      {items.map((item) => (
        <Todolist key={item.id} title={item.title} />
      ))}
    </ol>
  )
}

export default Todo;
