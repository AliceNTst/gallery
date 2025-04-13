import React, { useState, useEffect, useContext } from "react";
import './Login.css';
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { googleAuth } from "./firebase/firebase";
import { auth } from "./firebase/firebase";
import LoginButton from './LoginButton';
import { UserContext } from '../UserContainer';

const Login = () => {
    const inwardArrowPath = "M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z";

    const outwardArrowPath = "M294.1 406.1L171.3 283.3c-7.2-7.2-11.3-17.1-11.3-27.3s4.1-20.1 11.3-27.3L294.1 105.9c6.4-6.4 15-9.9 24-9.9c18.7 0 33.9 15.2 33.9 33.9l0 62.1L480 192c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-128 0 0 62.1c0 18.7-15.2 33.9-33.9 33.9c-9 0-17.6-3.6-24-9.9zM160 96l-64 0c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96l0-256c0-53 43-96 96-96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z";

    const [user, setUser] = useContext(UserContext);

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleAuth);
        } catch (err) {
            console.error(err);
        }
    }; 


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();  // Cleanup the listener on unmount
    }, []);

    const logout = () => {
        signOut(auth)  // Sign out the user using the auth instance
        .then(() => {
            console.log('User signed out');
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
    };

    
  
    return (
    <div>
      {!user ? (
        <LoginButton onClick={googleSignIn} svgPath={inwardArrowPath} buttonText="Login"/>
      ) : (
        <div class='logged-in-panel-container'>
          <div class='logout-button-wrapper'>
            <LoginButton onClick={logout} svgPath={outwardArrowPath} buttonText="Logout"/>
          </div>
          <div class="logout-text-wrapper">
            <p>Welcome!</p>
            <p>{user.displayName}</p>
          </div>
        </div>
      )}
      </div>
    );
  };
  
  export default Login;