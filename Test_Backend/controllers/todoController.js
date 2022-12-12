const mongoose = require("mongoose");
const Todo = require("../models/todo");

const FindOneTodo = async (req, res) => {
  const todos = await Todo.findOne({ _id: req.params.id });
  if (!todos) {
    res.status(500).json({ Message: "Error : Enable to find the tache" });
  }
  res.send(todos);
};

const FindAllTodo = async (req, res) => {
  const todos = await Todo.find();
  if (!todos) {
    res.status(500).json({ Message: "Error : Enable to find taches" });
  }
  res.send(todos);
};

const AddNewTodo = async (req, res) => {
  let newTodo = new Todo({
    title: req.body.title,
    description: req.body.description,
    finished: req.body.finished,
    created_at: req.body.created_at,
    finished_at: req.body.finished_at,
    updated_at: req.body.updated_at,
    idUser: req.body.idUser,
  });
  newTodo = await newTodo.save();
  if (!newTodo) {
    return res
      .status(404)
      .send({ Message: "Error : Enable to create a new tache" });
  }
  res.send(newTodo);
};

const UpdateTodo = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send({ Message: "Error : Invalid tache Id" });
  }
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      finished: req.body.finished,
      created_at: req.body.created_at,
      finished_at: req.body.finished_at,
      updated_at: req.body.updated_at,
      idUser: req.body.idUser,
    },
    { new: true }
  );
  if (!todo) {
    return res
      .status(404)
      .send({ Message: "Error : Enable to update the todo" });
  }
  res.send(Todo);
};

const DeleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then((todo) => {
      if (todo) {
        return res.status(200).json({
          success: true,
          Message: "Todo was successfully deleted !",
        });
      } else {
        return res.status(404).json({
          success: false,
          Message: "Error : Enable to delete the Todo",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({ success: false, Message: err });
    });
};

module.exports = {
  FindOneTodo,
  FindAllTodo,
  AddNewTodo,
  UpdateTodo,
  DeleteTodo,
};
