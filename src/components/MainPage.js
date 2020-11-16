import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const MainPage = () => {
  const [todoItems, setTodoItems] = useState([
    "Learn Js",
    "Complete my react home work",
    "Learn Redux",
  ]);
  const [value, setValue] = useState();
  const handleKeyDownInput = (event) => {
    if (event.key === "Enter") {
      setTodoItems([...todoItems,value]);
      setValue("");
    } else {
      return;
    }
  };

  useEffect(() => {
    console.log("ITEMTODO", todoItems);
  }, [todoItems]);

  return (
    <TodoList
      todoItems={todoItems}
      setTodoItems={setTodoItems}
      value={value}
      setValue={setValue}
      handleKeyDownInput={handleKeyDownInput}
    />
  );
};

export default MainPage;
