import React, { useState } from "react";
import './Portfolio.css';
import logo_bat from '../img/logo-bat.png';
import { Images } from './ImagesStorageMain';

const Portfolio = () => {
  const images = []
  

  return (
    <div>
      <div class='parallax'>
        <div className="title-container">
        <div className="title">
          <p>Галерея Напрацювань</p>
        </div></div></div>
        <div className="header-container">
          <div className="text-container left">
              <div className="text-paragraph left">
                  <p>1 Ich bin eine Künstlerin, geboren in der Ukraine und ansässig in Deutschland, mit einem Fokus auf Öl- und digitale Malerei. 
                  Mein Stil verbindet Elemente des Impressionismus und Realismus, wobei ich besonderen Wert darauf lege,
                  meine Motive sowohl erkennbar als auch lebendig in einer traumhaften Weise darzustellen.</p>
              </div>
            </div>
            <div className="image-container">
              <div className="logo-bat">
                  <img src={logo_bat} alt="" />
              </div>
            </div>
            <div className="text-container right">
              <div className="text-paragraph right">
                  <p>2 Ich bin eine Künstlerin, geboren in der Ukraine und ansässig in Deutschland, mit einem Fokus auf Öl- und digitale Malerei. 
                  Mein Stil verbindet Elemente des Impressionismus und Realismus, wobei ich besonderen Wert darauf lege,
                  meine Motive sowohl erkennbar als auch lebendig in einer traumhaften Weise darzustellen.</p>
              </div>
            </div>
        </div>
      
      <div class='about-site-text-container'>
          <p class='text-paragraph text-center'>
            Welcome to Gallery! Here you will find various works in different mediums as well photography that can be used as references in different kinds of art.
            </p>
      </div>

      <div class='parallax'>
        <div class='works-text-container'>
            <p class='text-paragraph text-center small-header works'>
              Kunstwerke
            </p>
            <p class='text-paragraph text-center works'>
            Oil & Digital
            </p>
        </div>
      </div>

      <div class='colored-box'>
      <div class='work-images-container'>
            {Object.entries(Images).map(([key, { src, alt }]) => (
              <div class='box'>
                <img src={src} alt={alt} />
                <div className="image-overlay">
                  <h3>{alt}</h3>
                  <p>This is some extra info about the image.</p>
              </div>
            </div>
            ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;