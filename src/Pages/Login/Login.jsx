import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      username: username,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://www.mecwinnethra.com/api/user/react-test/login",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          setError("Invalid Username Or Password");
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((result) => {
        console.log("Response Text:", result);
        const token = result;
        if (token) {
          localStorage.setItem("authToken", token);
          navigate("/Home");
        } else {
          console.error("Login failed: No token received");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <div className="loginCard">
          <div className="data">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleLogin}>Login</button>
            <br />
            <br />
            <h5>{error}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
