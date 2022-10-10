import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDos = (props) => {
  return (
    <div className="container">
      <h4 className="text-center">This is my ToDo list</h4>
      <ToDoItem todo={props.todos[0]} />
    </div>
  );
};

export default ToDos;
