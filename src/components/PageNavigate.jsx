import React from 'react';
import {NavLink} from "react-router-dom";

const PageNavigate = () => {
    return (
        <ul class="list-group">
            <li class="list-group-item list-group-item-action"><NavLink to='todo'>ToDo</NavLink></li>
            <li class="list-group-item list-group-item-action"><NavLink to='images'>Images</NavLink></li>
        </ul>
    )
}

export default PageNavigate