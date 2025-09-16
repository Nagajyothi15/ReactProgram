import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { registerUser } from "./store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css"; // Import styles

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const password = watch("password");

  const handleSign = (data) => {
    dispatch(
      registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      })
    );
    toast.success("✅ Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSubmit(handleSign)} className="signup-form">
          <input
            className="form-input"
            placeholder="Username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && <small className="error-msg">{errors.username.message}</small>}
          <br />
          <input
            className="form-input"
            placeholder="Email"
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <small className="error-msg">{errors.email.message}</small>}
          <br />
          <input
            className="form-input"
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
          />
          {errors.password && <small className="error-msg">{errors.password.message}</small>}
            <br />
          <input
            className="form-input"
            placeholder="Confirm Password"
            type="password"
            {...register("confirmPassword", {
              validate: (value) => value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <small className="error-msg">{errors.confirmPassword.message}</small>
          )}
          <br />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="signup-footer">
          Already have an account? <NavLink to="/login" className="signin-link">Sign In</NavLink>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
