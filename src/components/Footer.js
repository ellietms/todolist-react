import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Footer = ({count}) => {
    return(
        <div className="todo-footer">
            <strong>
                <span className="count-todos">
                {count}
                </span>
                {` items left`}
            </strong>
        </div>
    )
}

export default Footer;