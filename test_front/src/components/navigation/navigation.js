import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/todoPage">Todo page</Link>
        <Link to="/addTodo">add todo</Link>
        <Link to="/getTodo">get todo</Link>
        <Link to="/getOneTodo">get one todo</Link>
        <Link to="/updateTodo">update todo</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
    </nav>
);
export default Navigation;