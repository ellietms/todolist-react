import React from "react";
import TodoList from './TodoList';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const MainPage = () => {
  let itemsTodo = [
    { id:1, text: "Learn Js", completed: false },
    { id:2, text: "Complete my react home work", completed: false },
    { id:3, text: "Learn Redux", completed: false },
  ];
  let title = 'things to do'
  return (
    <TodoList title={title} items={itemsTodo} />
  );
};

export default MainPage;
