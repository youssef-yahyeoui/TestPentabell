import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import SignupUser from "./components/signup/signup";
import { Routes, Route } from "react-router-dom";
import AddNewTodo from "./components/crudTodo/addTodo";
import GetOneTodo from "./components/crudTodo/getOneTodo";
import GetTodo from "./components/crudTodo/getTodo";
import TodoPage from "./components/crudTodo/todoPage";
import UpdateTodo from "./components/crudTodo/updateTodo";
import Login from "./components/login/login";
import Navigation from "./components/navigation/navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>test pentabell</h1>
      <Navigation />
      <Routes>
        <Route exact path="/signup" element={<SignupUser />} />
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/addTodo" element={<AddNewTodo />}></Route>
        <Route exact path="/getOneTodo" element={<GetOneTodo />}></Route>
        <Route exact path="/getTodo" element={<GetTodo />}></Route>
        <Route exact path="/todoPage" element={<TodoPage />}></Route>
        <Route exact path="/updateTodo" element={<UpdateTodo />}></Route>
        <Route exact path="/*" element={<p>Route not found !!</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
