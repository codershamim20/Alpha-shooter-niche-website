
import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import authInit from '../Login/firebase/firebase.init';
import './Register.css'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

authInit();

const Register = () => {
  const[member,setMember]=useState({})
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
    const {user,
        googleSignIn,
        isLoading,
        logOut } = useFirebase();
  const handleEmail = e => {
            setEmail(e.target.value)
          }    
  const handlePassword = e => {
            setPassword(e.target.value)
  }
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
  const auth = getAuth();
    
  const handleUserRegister = (e) => {
    // e.preventDefault;
    
    createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
    const member = result.member;
    console.log(member)
  })
  const processLogin = e => {
    signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const member = result.member;
            console.log(member)
    })
}

  isLogin ? processLogin(email, password) : handleUserRegister(email, password)
    
  }
  
    return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-md-10">
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
                  { member.email?<Link onClick={logOut} className="nav-link" to="/">{member.email} Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
              <div className="form-check">
                    <input onChange={toggleLogin} className="form-check-input " type="checkbox" />
                  <label>Already Registered?Please Check the box for Login</label>                  
              </div>
            </div>
            </Form>
              <div >
              { user.displayName?<Link onClick={logOut} className="nav-link" to="/login">{user.displayName} Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
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

export default Register;