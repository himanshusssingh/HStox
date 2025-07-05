import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("isLogin", "true");
    try {
      const response = await axios.post("http://localhost:3001/newUser", {
        email,
        password,
      });
      alert("You are logged in.");
      navigate("/");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div
        className="text-center p-5 m-5"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <h2>Open a free demat & trading account online</h2>
        <p>
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </p>
      </div>
      <div className="row ps-5 ">
        <div className="col ps-5 ms-5">
          <img src="media/images/signup.png" alt="signup img"></img>
        </div>
        <div
          className="col pe-5 m-5"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <h3>Signup Now</h3>
          <p>Or track your existing application</p>
          <br></br>
          <div class="input-group input-group-lg">
            <div className="inputs">
              <fieldset>
                <legend>Email ID</legend>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </fieldset>
              <fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </fieldset>
            </div>
          </div>
          <br></br>
          <button type="submit" class="btn btn-primary">
            <Link className="btn btn-blue" onClick={handleSubmit}>
                         Sign Up
                      </Link>
           
          </button>
          <br />
          <br />
          <p>By proceeding, you agree to the HStox terms & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
