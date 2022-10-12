import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDos = (props) => {
  return (
    <div className="container">
      <h1 className="text-center">This is my ToDo list</h1>
      {/* <ToDoItem todo={props.todos[0]} /> */}
      {props.todos.map((todo) => {
        return <ToDoItem todo={todo} />;
      })}
    </div>
  );
};

export default ToDos;
