const express = require("express");
const router = express.Router();
const {
  FindOneTodo,
  FindAllTodo,
  AddNewTodo,
  UpdateTodo,
  DeleteTodo,
} = require("../controllers/todoController");

router.get("/todo/:id", FindOneTodo);

router.get("/todos", FindAllTodo);

router.post("/todo", AddNewTodo);

router.put("/todo/:id", UpdateTodo);

router.delete("/todo/:id", DeleteTodo);

module.exports = router;
