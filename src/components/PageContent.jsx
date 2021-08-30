import React from 'react';
import {Route, Switch} from "react-router-dom";
import ToDoList from "./ToDo/ToDoList";
import Images from "./Images/Images";

const PageContent = () => {
    return (
        <Switch>
            <Route path="/todo">
                <ToDoList />

            </Route>
            <Route path="/images">
                <Images />

            </Route>
        </Switch>
    )
}

export default PageContent