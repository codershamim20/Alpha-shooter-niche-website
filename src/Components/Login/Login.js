
import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {  Form } from 'react-bootstrap';

import useFirebase from '../../hooks/useFirebase';


const Login = () => {
  const { user,
    googleSignIn,
    isLoading,
  logOut } = useFirebase();
  // console.log(user)
  // const[user,setUser]=useState({})
  const auth = getAuth();
  // const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
    // const {user,
       
    //     isLoading,
    //     logOut } = useFirebase();
  const handleEmail = e => {
            setEmail(e.target.value)
          }    
  const handlePassword = e => {
            setPassword(e.target.value)
  }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
  
    
  const handleUserRegister = (e) => {
    // e.preventDefault();
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const user = result.user;
    console.log(user)
  })
  const processLogin = e => {
    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
    })
}

  isLogin ? processLogin(email, password) : handleUserRegister(email, password)
    
  }
  
    return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
          <div className="col-md-10 bg-light">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jabCF5UQ_5E-OqxySND71-UO6fh7d7Mf6A&usqp=CAU" alt="" />
            <div>
               <h2 className="text-primary">Please { isLogin?"Login":"Register"}</h2>
              <Form onSubmit={handleUserRegister}>
            <div className="form-input mt-5">
              <input
                onBlur={handleEmail}
                className="mt-2 px-5"
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onBlur={handlePassword}
                className="mt-2 px-5"
                type="password"
                placeholder="Password"
              />
              <br />
              <div className="login-regiater-btn m-4">
                <input type="submit" value={isLogin?"Login":"Register"}/> <br/>
                
              </div>
              <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input " type="checkbox" />
                  <label>Already Registered? Please Check the box for Login</label>                  
              </div>
            </div>
            </Form>
              <div >
              
                {/* <h1> Name{ user.displayName}</h1> */}
          <button
                onClick={googleSignIn}
                className="btn btn-warning mb-5"
              >
                Google Sign in
              </button>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Login;