import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import gsap from "gsap";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Main from '../views/Main';
import ImageGallery from '../views/ImageGallery';
import ReferenceGallery from '../views/ReferenceGallery';
//import AdminPanel from '../views/AdminPanel';
import About from '../views/About';
import './index.css'

// export default function Router() {
//     const location = useLocation();
//   useGSAP(
//     () => {
//       if (!ScrollTrigger.isTouch) {
//       ScrollSmoother.create({
//         smooth: 1.5,
//         effects: true
//       });
//       ScrollTrigger.refresh(); // ✅ Forces recalculating scroll height
//     }
//     },
//     {
//         dependencies: [location]
//       }
//   );

gsap.registerPlugin(ScrollTrigger);

export default function Router() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // If using ScrollTrigger (it needs to be updated on scroll too)
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, [location]);

  return (
    // <div id="smooth-wrapper">
    // <div id="smooth-content">
    <div>
      <div>
        <Routes>
          <Route path="/">
            <Route index element={<Main />} />
            <Route path="artworks" element={<ImageGallery tableName="artworks" />} />
            <Route path="reference" element={<ReferenceGallery tableName="references" />} />
            {/* <Route path="admin" element={<AdminPanel />} /> */}
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
    </div>
    </div>

  );
}
