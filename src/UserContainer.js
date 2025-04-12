import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./components/firebase/firebase";

// Create a Context for the user state
const UserContext = createContext();

// Create a Provider to wrap your app and provide the user state
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser); // Update user state when auth state changes
  //   });

  //   return () => unsubscribe(); // Clean up when component unmounts
  // }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };