const express = require("express");
const router = express.Router();
const {
  FindOneUser,
  FindAllUser,
  AddNewUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/userController");

router.get("/user/:id", FindOneUser);

router.get("/users", FindAllUser);

router.post("/user", AddNewUser);

router.put("/user/:id", UpdateUser);

router.delete("/user/:id", DeleteUser);

module.exports = router;
