import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "./store";
import Swal from "sweetalert2";
import "./Login.css"; // ✅ Custom CSS file

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, loginError } = useSelector((state) => state.userAuth);

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

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      Swal.fire({
        title: "⚠️ Missing Fields",
        text: "Please enter both username and password.",
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
            className="auth-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="auth-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {loginError && <p className="error-msg">{loginError}</p>}

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p>
          Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
        </p>
        <p>
          <NavLink to="/forgot-password">Forgot Password?</NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
