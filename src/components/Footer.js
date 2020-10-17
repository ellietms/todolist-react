import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const Footer = () => {
    return(
        <div className="todo-footer">
            <strong>
                <span className="count-todos">
                    0
                </span>
                {'items left'}
            </strong>
        </div>
    )
}

export default Footer;