import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';
import Router from './router';
import Navbar from './components/Navbar';
import { UserProvider } from './UserContainer';

gsap.registerPlugin(ScrollTrigger, useGSAP);


function App() {
  return (
    <>
    <UserProvider>
      <Navbar />
      <Router />
    </UserProvider>
    </>
  );
}

export default App;
