import React from "react";

interface TodolistProps {
    title: string;
}

const Todolist: React.FC<TodolistProps> = ({ title }) => {
    return (
        <li>{title}</li>
    )
}

export default Todolist;
