import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "./store";
import Swal from "sweetalert2";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState(""); // can be username OR email
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loginError } = useSelector((state) => state.userAuth);

  // Handle successful login
  useEffect(() => {
    if (isAuthenticated) {
      Swal.fire({
        title: "✅ Login Successful",
        text: "Welcome back!",
        icon: "success",
        confirmButtonColor: "#28a745",
      }).then(() => {
        navigate("/"); 
      });
    }
  }, [isAuthenticated, navigate]);

  // Handle login errors
  useEffect(() => {
    if (loginError) {
      Swal.fire({
        title: "❌ Login Failed",
        text: loginError,
        icon: "error",
        confirmButtonColor: "#e74c3c",
      });
    }
  }, [loginError]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      Swal.fire({
        title: "⚠️ Missing Fields",
        text: "Please enter username/email and password.",
        icon: "warning",
        confirmButtonColor: "#f39c12",
      });
      return;
    }
    dispatch(loginUser({ username, password }));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔐 Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            className="auth-input"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="auth-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="auth-btn">Login</button>
          <p>
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
          <p>
            <NavLink to="/forgot-password">Forgot Password?</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
