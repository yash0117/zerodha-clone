import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://zerodha-backend-j83m.onrender.com/api/auth/login",
        inputValue
      );

      if (data.success) {
        toast.success(data.message);

        // Save JWT Token
        localStorage.setItem("token", data.token);

        setTimeout(() => {
          // Dashboard Open
          window.location.href = "http://localhost:3001";
        }, 1500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="login-page">

        {/* Left Section */}

        <div className="login-left">

          <img
            src="https://zerodha.com/static/images/account_open.svg"
            alt="login"
          />

          <h1>Welcome Back</h1>

          <p>
            Login to access your holdings, positions and trading dashboard.
          </p>

        </div>

        {/* Right Section */}

        <div className="login-right">

          <div className="login-card">

            <h2>Login</h2>

            <p>Continue your investment journey.</p>

            <form onSubmit={handleSubmit}>

              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={handleChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />

              <button type="submit">
                Login
              </button>

            </form>

            <p className="signup-text">
              Don't have an account?
              <Link to="/signup"> Open Account</Link>
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Login;