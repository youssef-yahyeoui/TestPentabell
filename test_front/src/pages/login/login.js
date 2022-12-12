import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/todo");
  });
  async function loginUser(event) {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };

    await axios
      .post("http://localhost:8000/api/login", body)
      .then((response) => {
        if (response.data.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          if (response.data.user.$new) {
            navigate(`/todos/${response.data.user._id}`);
            toast.success("login successful fill in your information");
          } else {
            navigate("/todo");
            console.log(response.data);
            const { first_name, last_name } = response.data.user._doc;
            toast.success(`Hello ${first_name} ${last_name}`);
          }
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <div class="form" encType="multipart/form-data">
      <div class="title">Login</div>
      <div class="input-container ic1">
        <div class="input-container ic2">
          <input
            id="Email"
            class="input"
            type=""
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="email"
          />
          <div class="cut"></div>
          <label for="Enter new Email" class="placeholder">
            Enter new Email
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="Password"
            class="input"
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
          <div class="cut"></div>
          <label for="Enter new Password" class="placeholder">
            Enter new Password
          </label>
        </div>

        <br />

        <button
          type="text"
          class="submit"
          onClick={loginUser}
          data-testid="login"
        >
          Login
        </button>
      </div>

      <br />
    </div>
  );
};

export default Login;
