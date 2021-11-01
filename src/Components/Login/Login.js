
import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


import useFirebase from '../../hooks/useFirebase';


const Login = () => {
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
                className="btn btn-warning mb-5"
              >
                Google Log in
              </button>
              
            </div>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Login;