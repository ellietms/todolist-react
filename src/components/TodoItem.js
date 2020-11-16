import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const TodoItem = ({currentItem,elementIndex,todoItems,setTodoItems}) => {
  const[someBoolean,setSomeBoolean]=useState(true)
  const handleTodoItem = () => {
    if(document.getElementById("todoItemId").checked){
      let newTodoItems = todoItems.filter(element => element !== currentItem);
      setTodoItems(newTodoItems);
      setSomeBoolean(true);
    }
    else{
      return;
    }
  }
  return (
    <li key={elementIndex}>
      <label>
        <input 
        type="checkbox"
         id="todoItemId"
         onClick={handleTodoItem}
         value={someBoolean}
         checked= {someBoolean ? someBoolean : false}
         />
        <p key={elementIndex}>{currentItem}</p>
      </label>
    </li>
  );
};

export default TodoItem;
