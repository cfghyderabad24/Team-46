// Signin.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Signin.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  async function onSignInFormSubmit(userObj) {
    try {
      const response = await axios.post("http://localhost:4000/donor-api/login", {
        username: userObj.username,
        password: userObj.password
      });

      if (response.status === 200 && response.data.token) {
        // Store the token and navigate to the home page
        localStorage.setItem("token", response.data.token);
        navigate('/product', { state: { username: userObj.username } });
      } else {
        console.error("Unexpected response:", response);
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again.");
    }
  }

  return (
    <div>
      <Header />
      <div className="login-layout">
        <div className="login-form">
          <div>
            <h2>Welcome Back</h2>
            <p>Please login to continue.</p>
          </div>
          <form onSubmit={handleSubmit(onSignInFormSubmit)}>
            <div className="input-container m-2 mt-5">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                style={{ width: "100%" }}
                placeholder='Enter Your User Name'
                type="text"
                {...register("username", { required: true, minLength: 4 })}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              />
              {errors.username?.type === "required" && (
                <p className="text-danger">User Name is required</p>
              )}
              {errors.username?.type === "minLength" && (
                <p className="text-danger">Min Length should be 4</p>
              )}
            </div>
            <div className="input-container m-2 mt-4">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                style={{ width: "100%" }}
                placeholder='Enter Password'
                type="password"
                {...register('password', { required: true, minLength: 4 })}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              {errors.password?.type === 'required' && (
                <p className="text-danger">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-danger">Password should be at least 4 characters long</p>
              )}
            </div>
            <button
              className="btn btn-dark mt-3"
              type="submit"
            >
              Login
            </button>
          </form>
          <h6 className='p-3'>
            New User?{" "}
            <Link to='/signup'>Sign Up</Link>{" "}
            here
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signin;
