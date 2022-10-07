import React from "react";
import { TodoItem } from "./TodoItem";

export const ToDos = (props) => {
  return (
    <div className="container">
      <h4 className="text-center">This is my ToDo list</h4>
      <TodoItem todo={props.todos[0]} />
    </div>
  );
};

export default ToDos;
