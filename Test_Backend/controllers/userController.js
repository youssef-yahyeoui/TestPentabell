const mongoose = require("mongoose");
const User = require("../models/user");

const FindOneUser = async (req, res) => {
  const users = await User.findOne({ _id: req.params.id });
  if (!users) {
    res.status(500).json({ Message: "Error : Enable to find the user" });
  }
  res.send(users);
};

const FindAllUser = async (req, res) => {
  const users = await User.find();
  if (!users) {
    res.status(500).json({ Message: "Error : Enable to find users" });
  }
  res.send(users);
};

const AddNewUser = async (req, res) => {
  let newUser = new User({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phoneNumber: req.body.phoneNumber,
  });
  newUser = await newUser.save();
  if (!newUser) {
    return res
      .status(404)
      .send({ Message: "Error : Enable to create a new User" });
  }
  res.send(newUser);
};

const UpdateUser = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(400).send({ Message: "Error : Invalid User Id" });
  }
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  );
  if (!user) {
    return res
      .status(404)
      .send({ Message: "Error : Enable to update the User" });
  }
  res.send(User);
};

const DeleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (user) {
        return res.status(200).json({
          success: true,
          Message: "User was successfully deleted !",
        });
      } else {
        return res.status(404).json({
          success: false,
          Message: "Error : Enable to delete the User",
        });
      }
    })
    .catch((err) => {
      return res.status(404).json({ success: false, Message: err });
    });
};

module.exports = {
  FindOneUser,
  FindAllUser,
  AddNewUser,
  UpdateUser,
  DeleteUser,
};
