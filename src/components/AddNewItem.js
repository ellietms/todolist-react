import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const AddNewItem = ({ value , setValue , handleKeyDownInput}) => { 
   
    return(
        <input 
        type="text" 
        className="form-control add-todo mb-3" 
        placeholder="what to do?"
        value={value}
        name="addNewItem"
        onChange={(event) => {setValue(event.target.value)}}
        onKeyDown={handleKeyDownInput}
        >
        </input>
    )
}

export default AddNewItem;