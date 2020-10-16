import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const TodoItem = (props) => {
  const { key, todo } = props;
  return (
    <li key={key}>
      <label>
        <input type="checkbox" />
        {todo}
      </label>
    </li>
  );
};

export default TodoItem;
