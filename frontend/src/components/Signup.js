import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Signup.css';
import BackgroundVideo from './video1.mp4'; 
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [err, setErr] = useState("");
  const [state, setState] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const password = watch('password');

  async function onSignUpFormSubmit(userObj) {
    if (userObj.password !== userObj.confirmPassword) {
      setErr("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:4000/${userObj.userType}-api/user`, userObj);
      if (res.status === 201) {
        setState(true);
        setSignupSuccess(true);
        setErr("");
        navigate("/SignIn");
      } else {
        setErr(res.data.message);
      }
    } catch (error) {
      setErr("An error occurred during signup.");
    }
  }

  return (
    <div className="register-layout text-center">
      <video autoPlay loop muted className="login-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="register-form text-center">
        <form onSubmit={handleSubmit(onSignUpFormSubmit)}>
          <h2 className="text-black pt-1">Register</h2>
          {err && <p className="text-danger fs-3">{err}</p>}
          <input
            style={{ width: '300px' }}
            type="text"
            {...register("firstName", { required: true })}
            className={`form-control mx-auto mt-4 p-2 ${errors.firstName ? 'is-invalid' : ''}`}
            placeholder="First Name"
          />
          {errors.firstName && <p className="text-danger">First name is required</p>}
          <input
            style={{ width: '300px' }}
            type="text"
            {...register("lastName", { required: true })}
            className={`form-control mx-auto mt-2 p-2 ${errors.lastName ? 'is-invalid' : ''}`}
            placeholder="Last Name"
          />
          {errors.lastName && <p className="text-danger">Last name is required</p>}
          
          <input
            style={{ width: '300px' }}
            type="text"
            {...register("phoneNumber", { required: true, pattern: /^\d{10}$/ })}
            className={`form-control mx-auto mt-2 p-2 ${errors.phoneNumber ? 'is-invalid' : ''}`}
            placeholder="Phone Number"
          />
          {errors.phoneNumber?.type === "required" && (
            <p className="text-danger">Phone number is required</p>
          )}
          {errors.phoneNumber?.type === "pattern" && (
            <p className="text-danger">Invalid phone number format</p>
          )}
          <input
            style={{ width: '300px' }}
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={`form-control mx-auto mt-2 p-2 ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Email ID"
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">Email ID is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-danger">Invalid email format</p>
          )}
          <input
            style={{ width: '300px' }}
            type="date"
            {...register("dateOfBirth", { required: true })}
            className={`form-control mx-auto mt-2 p-2 ${errors.dateOfBirth ? 'is-invalid' : ''}`}
            placeholder="Date of Birth"
          />
          {errors.dateOfBirth && <p className="text-danger">Date of Birth is required</p>}
          <input
            style={{ width: '300px' }}
            type="password"
            {...register("password", { required: true, minLength: 8 })}
            className={`form-control mx-auto mt-2 p-2 ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">Password should be at least 8 characters long</p>
          )}
          <input
            style={{ width: '300px' }}
            type="password"
            {...register("confirmPassword", { required: true, validate: value => value === password })}
            className={`form-control mx-auto mt-2 p-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.type === "required" && (
            <p className="text-danger">Confirm Password is required</p>
          )}
          {errors.confirmPassword && errors.confirmPassword.type === "validate" && (
            <p className="text-danger">Passwords do not match</p>
          )}
          <button className="btn register btn-dark mt-3" type="submit">
            Submit
          </button>
          <h6 className="p-3">
            Already have an account? <Link to="/SignIn">Login</Link> here
          </h6>
        </form>
      </div>
    </div>
  );
}

export default Signup;
