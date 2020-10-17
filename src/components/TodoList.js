import React from "react";
import TodoItem from "./TodoItem";
import Title from "./Title";
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const TodoList = ({items}) => {
  return (
    <div className="todolist">
      <Title />
      <ul className="">
        {items.map(todoItem => {
          return <TodoItem key={todoItem.id} todo={todoItem.text} />;
        })}
      </ul>
      <Footer count={items.length}/>
    </div>
  );
};

export default TodoList;
