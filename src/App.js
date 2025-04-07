import React from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './App.css';
import Router from './router';
import Navbar from './components/Navbar';

gsap.registerPlugin(ScrollTrigger, useGSAP);


function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
