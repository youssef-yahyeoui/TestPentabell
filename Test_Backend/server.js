var express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
var app = express();
const routerUser = require("./routes/user.js");
const routerTodo = require("./routes/todo.js");
const routerAuth = require("./routes/auth.js");

// Database connection
mongoose
  .connect(
    "mongodb+srv://youssef:youssef@cluster0.ue11bex.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* START ROUTES */
app.use("/api", routerUser);
app.use("/api", routerTodo);
app.use("/api", routerAuth);
/* END  ROUTES */
