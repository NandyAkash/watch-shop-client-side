import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken, signInWithPopup, updateProfile, GoogleAuthProvider, onAuthStateChanged} from "firebase/auth"
import {  useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setisLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    const auth = getAuth();


    // New User registration
    const registrationUser = (email, password, name, history) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);

            //Save to database
            saveUser(email,name,'POST');
            //set data to firebase
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(()=>{})
            .catch((error) => {
                console.log(error)
            });

            // history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);

          })
          .finally(()=> setisLoading(false));
    }

    //Login with Email and Password

    const loginUser = (email,password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(()=> setisLoading(false));
    }

    //Google signin
    const signInGoogle = (location, history) => {
        setisLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result)=> {
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .finally(()=> setisLoading(false));
    }

    //User state Change
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idtoken => {
                    setToken(idtoken);
                })
            }
            else{
                setUser({})
            }
            setisLoading(false)
        });
        return () => unsubscribed;
    },[auth]);

    useEffect(()=>{
        fetch(`https://pure-woodland-40650.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const logOut = () => {
        setisLoading(true)
        signOut(auth)
            .then(() => {})
            .finally(()=> setisLoading(false));
    }

    const saveUser = (email,displayName,method) => {
        const user = { email, displayName };
        fetch('https://pure-woodland-40650.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        registrationUser,
        loginUser,
        isLoading,
        signInGoogle,
        logOut,
        authError
    }
};

export default useFirebase;