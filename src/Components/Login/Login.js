
import React, { useState } from 'react';

<<<<<<< HEAD
import {  Alert, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
=======
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
import useFirebase from '../../hooks/useFirebase';
import useAuth, { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from '../../hooks/useAuth';


const Login = () => {
<<<<<<< HEAD
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
    console.log(loginData)
    loginUser(loginData.email, loginData.password, location, history);
    
      e.preventDefault();
  }

  const handleGoogleSignIn = () => {
      signInWithGoogle(location, history)
  }
   return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
          <div className="col-md-10 bg-light">
          <img src="https://images.all-free-download.com/images/graphicthumb/user_login_90303.jpg" alt="" />
            <div>
               {/* <h2 className="text-primary">Please { isLogin?"Login":"Register"}</h2> */}
              <Form onSubmit={handleLoginSubmit}>
            <div className="form-input mt-5">
                 <input
                   name="name"
                onChange={handleOnChange}
                className="mt-2 px-5"
                type="text"
                placeholder="Your name"
              />
              <br />
                 <input
                   name="email"
                onChange={handleOnChange}
                className="mt-2 px-5"
                type="email"
                placeholder="Email"
              />
              <br />
                 <input
                   name="password"
               onChange={handleOnChange}
                className="mt-2 px-5"
                type="password"
                placeholder="Password"
              />
                  <br />
                  {/* {message && <p>{ message}</p>}
              <div className="login-regiater-btn m-4"> */}
                {/* <input type="submit" value={isLogin?"Login":"Register"}/> <br/> */}
                <input type="submit" value="Login"/> <br/>
                
              </div>
              <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <button variant="text">New User? Please Register</button>
                        </NavLink>
                        {isLoading && <Spinner />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
              </Form>
            </div>
            
              <div >
              
                {/* <h1> Name{ user.displayName}</h1> */}
          <button
                onClick={handleGoogleSignIn}
=======
  const { 
    googleSignIn } = useFirebase();
  const [message, setMessage] = useState('');
  const auth = getAuth();
    // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLogin, setIsLogin] = useState(false);
  // const handleEmail = e => {
  //           setEmail(e.target.value)
  //         }    
  // const handlePassword = e => {
  //           setPassword(e.target.value)
  // }
  //   const toggleLogin = e => {
  //       setIsLogin(e.target.checked)
  //   }
  
  // const submit = (e) => {
  //   e.preventDefault();
  //   isLogin ? processLogin(email, password) : handleUserRegister(email, password)
  // }  
  // const handleUserRegister = (e) => {
  //   createUserWithEmailAndPassword(auth, email, password)
  // .then(result => {
  //   const user = result.user;
  //   console.log(user)
  //   setMessage("Registered Successfully")
  // })
  //     .catch(error => {
  //     setMessage(error.message)
  //   })
   
    
//   }
//   const processLogin = e => {
//     // e.preventDefault();
//   signInWithEmailAndPassword(auth, email, password)
//       .then(result => {
//           const user = result.user;
//         console.log(user)
//         setMessage("Logeed In Successfully")
//       })
//       .catch(error => {
//         setMessage(error.message)
//       })
// }
    return (

        <div className="div d-flex justify-content-center align-items-center">
      <div className="row ">
          <div className="col-md-6 bg-light">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jabCF5UQ_5E-OqxySND71-UO6fh7d7Mf6A&usqp=CAU" alt="" />
            <div>
               <h2 className="text-primary">Please Login With Google</h2>
              <div >
              
               
              <button
                onClick={googleSignIn}
>>>>>>> a6b5dbc676a926d9ec41bf33fd707c9987ebd38b
                className="btn btn-warning mb-5"
              >
                Google Log in
              </button>
              
            </div>
          </div>
        </div>
        
      </div>
    
    );
};

export default Login;