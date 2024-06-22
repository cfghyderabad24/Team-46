import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { userAdminLoginThunk } from '../../../../frontend/src/redux/slices/userAdminSlice';
import './Signin.css';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

import BackgroundVideo from './video1.mp4'; 

function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { isPending, currentUser, loginUserStatus, errorOccured, errMsg } = useSelector(state => state.userAdminLoginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function onSignInFormSubmit(userObj) {
    console.log(userObj);
    dispatch(userAdminLoginThunk(userObj));
  }

  useEffect(() => {
    if (loginUserStatus) {
      if (currentUser.userType === "user") {
        navigate("/user-profile");
      }
      if (currentUser.userType === "admin") {
        navigate("/admin-profile");
      }
    }
  }, [loginUserStatus, currentUser]);

  return (
    <div className="login-layout">
      {/* Background Video */}
      <video autoPlay loop muted className="login-background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      

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
              style={{width:"100%"}}
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
              style={{width:"100%"}}
              placeholder='Enter Password'
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
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
          <Link to='/SignUp'>Sign Up</Link>{" "}
          here
        </h6>
      </div>
    </div>
  );
}

export default Signin;
