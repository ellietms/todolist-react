import React from "react";
import TodoItem from './TodoItem';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const TodoList = (props) => {
    const {items,title} = props
  return (
    <div className="todolist">
      <h1>{title.toUpperCase()}</h1>
      <ul className="">
        {items.map((todoItem) => {
          return (
           <TodoItem key={todoItem.id} todo={todoItem.text} />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
