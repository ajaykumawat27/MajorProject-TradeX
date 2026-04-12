import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupLogin.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = (msg) => toast.error(msg, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputValue;

    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      const { data } = await axios.post(
        "https://tradexbackend-u8se.onrender.com/auth/login",
        inputValue,
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setInputValue({ email: "", password: "" }); // reset only on success
        setTimeout(() =>{
          window.location.href = "http://localhost:3000/";
        }, 3000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="form_container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={inputValue.email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
