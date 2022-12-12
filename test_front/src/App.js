import React from "react";
//import { BrowserRouter } from "react-router-dom";
import SignupUser from "./pages/signup/signup";
import { Routes, Route } from "react-router-dom";
import AddNewTodo from "./pages/crudTodo/addTodo";
import GetOneTodo from "./pages/crudTodo/getOneTodo";
import GetTodo from "./pages/crudTodo/getTodo";
import TodoPage from "./pages/crudTodo/todoPage";
import UpdateTodo from "./pages/crudTodo/updateTodo";
import Login from "./pages/login/login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/signup" element={<SignupUser />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/addTodo" element={<AddNewTodo />}></Route>
        <Route exact path="/getOneTodo" element={<GetOneTodo />}></Route>
        <Route exact path="/getTodo" element={<GetTodo />}></Route>
        <Route exact path="/todoPage" element={<TodoPage />}></Route>
        <Route exact path="/updateTodo" element={<UpdateTodo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
