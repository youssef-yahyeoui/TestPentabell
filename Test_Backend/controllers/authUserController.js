const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const Register = async (req, res) => {
  try {
    // Get user input
    const { first_name, last_name, email, password, phoneNumber } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name && phoneNumber)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user passwor
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      phoneNumber,
    });

    // Create token
    let TOKEN_KEY =
      "sk_test_51KtE0BB41PaHVIrKm4MsrLxOOVIZnbBqzVoAnooZnyqVBhreBuj5xd8Cn6xa8yVOYhxhaHOOZwAg1kcpJpPXwVUn00iCjWQmKz";
    const token = jwt.sign({ user_id: user._id, email }, TOKEN_KEY, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

const ResetPassword = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password && first_name && last_name && phoneNumber)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user passwor
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      phoneNumber,
    });

    // Create token
    let TOKEN_KEY =
      "sk_test_51KtE0BB41PaHVIrKm4MsrLxOOVIZnbBqzVoAnooZnyqVBhreBuj5xd8Cn6xa8yVOYhxhaHOOZwAg1kcpJpPXwVUn00iCjWQmKz";
    const token = jwt.sign({ user_id: user._id, email }, TOKEN_KEY, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};
const Login = async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      let TOKEN_KEY =
        "sk_test_51KtE0BB41PaHVIrKm4MsrLxOOVIZnbBqzVoAnooZnyqVBhreBuj5xd8Cn6xa8yVOYhxhaHOOZwAg1kcpJpPXwVUn00iCjWQmKz";
      const token = jwt.sign({ user_id: user._id, email }, TOKEN_KEY, {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user
      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  Register,
  Login,
};
