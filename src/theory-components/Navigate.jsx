import React from 'react'
import {NavLink, Link, Route, Switch} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import User from "./User";

const Navigate = () => {
    let userId = 1
    return (
        <section>
            <h3>Navigation</h3>
            <ul className="nav">
                <li><NavLink exact={true} to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink exact={true} to="/users">Users</NavLink></li>
                <li><NavLink to={"/users/"+userId}>Users 1</NavLink></li>
            </ul>
            <hr/>
            <Switch>
                <Route exact={true} path="/" component={Home}/>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact" component={Contact} />
                <Route exact={true} path="/users" render={() => (<h5>Filter</h5>)} />
                <Route path="/users/:id" >
                    <User />
                </Route>
            </Switch>

        </section>
    )
}

export default Navigate