import React from 'react'
import '../../styles/LandingPage.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';
import { loginUser } from '../../redux/authSlice'
import { useDispatch } from 'react-redux';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
  
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const resultAction = await dispatch(loginUser({ email, password }));
  
        if (loginUser.fulfilled.match(resultAction)) {
            if (resultAction.payload.success === true) {
                navigate('/users'); // Redirect to users page on successful login
            } else {
                console.log(resultAction.payload.success || 'Login failed');
                navigate('/'); // Redirect to login page
            }
        } else {
            console.log(resultAction.error.message);
            navigate('/'); // Redirect to login page
        }
    };
  
    return (
      <div className="container-fluid landing-page">
        <div className="row">
          <div className="col-lg-6"></div>
  
          <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
            <div className="form-2-wrapper">
              <h2 className="text-center mb-4" style={{ color: "whitesmoke" }}>Sign-In to your account</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3 form-box">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3" ><Link to='/users' style={{color:"whitesmoke",textDecoration:"none"}}>Login</Link></button> */}
                <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">Login</button>
  
              </form>
  
            </div>
          </div>
        </div>
      </div>
    );
}

export default LoginPage
