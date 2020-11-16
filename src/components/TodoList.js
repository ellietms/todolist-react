import React from "react";
import TodoItem from "./TodoItem";
import Title from "./Title";
import Footer from "./Footer";
import AddNewItem from "./AddNewItem";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const TodoList = ({
  todoItems,
  setTodoItems,
  value,
  setValue,
  handleKeyDownInput,
}) => {
  return (
    <div className="todolist">
      <Title />
      <AddNewItem
        value={value}
        setValue={setValue}
        handleKeyDownInput={handleKeyDownInput}
      />
      <ul className="">
        {todoItems.map((currentItem,index) => {
          return (
            <TodoItem 
            currentItem = {currentItem}
            todoItems={todoItems} 
            setTodoItems={setTodoItems}
            elementIndex={index}
            />
          );
        })}
      </ul>
      <Footer count={todoItems.length} />
    </div>
  );
};

export default TodoList;
