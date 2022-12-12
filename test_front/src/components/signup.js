import axios from "axios";
import React, { useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";

const SignupUser = () => {
  //const history = useNavigate();
  //const { id } = useParams();

  // DATA user
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const SignupUser = (event) => {
    // event.preventDefault()

    const formdata = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };

    axios.post(`http://localhost:8000/api/register/`, formdata);
  };

  return (
    <div class="form" encType="multipart/form-data">
      <div class="title">Signup User</div>
      <div class="input-container ic1">
        <input
          id="Firstname"
          class="input"
          type="text"
          placeholder=" "
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <div class="cut"></div>
        <label for="Enter new first Name" class="placeholder">
          Enter new first Name
        </label>
        <div class="input-container ic2">
          <input
            id="Lastname"
            class="input"
            type="text"
            placeholder=" "
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <div class="cut"></div>
          <label for="Enter new first Name" class="placeholder">
            Enter new Last Name
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="Email"
            class="input"
            type="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
          <div class="cut"></div>
          <label for="Enter new Password" class="placeholder">
            Enter new Password
          </label>
        </div>
        <div class="input-container ic2">
          <input
            id="photo"
            class="input"
            type="test"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div class="cut"></div>
          <label for="Change photo" class="placeholder">
            Change photo
          </label>
        </div>

        <br />

        <button type="text" class="submit" onClick={() => SignupUser()}>
          Signup
        </button>
      </div>

      <br />
    </div>
  );
};

export default SignupUser;
