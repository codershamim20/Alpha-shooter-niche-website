import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../Components/Login/firebase/firebase.init";
// import Login from "../Components/Login/Login";
authInit();

const useFirebase = () => {
//   const { email, password } = Login;
    const auth = getAuth();
  const [user, setUser] = useState({});
  
    const [isLoading, setIsLoading] = useState(true);
    
    

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({ })
            }
            setIsLoading(false)
        });
        return () => unsubcribed;
    }, [isLoading])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => { })
        .finally(() => setIsLoading(false))
    }
    
    return {
        user,
        googleSignIn,
        isLoading,
      logOut
    }

};

export default useFirebase;