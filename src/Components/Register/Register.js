
import React, { useState } from 'react';


import {  Alert, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';


  const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
          <div className="col-md-10 bg-light">
          <img src="https://images.all-free-download.com/images/graphicthumb/user_login_90303.jpg" alt="" />
            <div>
              <Form onSubmit={handleLoginSubmit}>
            <div className="form-input mt-5">
              <input
                onBlur={handleOnBlur}
                    className="mt-2 px-5"
                    name="name"
                type="text"
                placeholder="Your name"
              />
              <br />
                  <input
                    name="email"
                onBlur={handleOnBlur}
                className="mt-2 px-5"
                type="email"
                placeholder="Email"
              />
              <br />
                  <input
                    name="password"
                onBlur={handleOnBlur}
                className="mt-2 px-5"
                type="password"
                placeholder="Password"
              />
                  <br />
                  <input
                    name="password2"
                onBlur={handleOnBlur}
                className="mt-2 px-5"
                type="password"
                placeholder="Re type Password"
              />
                  <br />
                <input type="submit" value={"Register"}/> <br/>
                
              </div>
              
             </Form>
          <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <button variant="text">Already Registered? Please Login</button>
                        </NavLink>
            </div>
            
              <div >
              {isLoading && <Spinner />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
              
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default Register;
