import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const AddNewItem = () => {
    return(
        <input type="text" className="form-control add-todo mb-3" placeholder="what to do?">
        </input>
    )
}

export default AddNewItem;