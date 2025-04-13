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

        {/* <div className="header-container">
          <div className="text-container left">
              <div className="text-paragraph left">
                  <p> Цей сайт — це портфоліо та творча платформа, де можна ознайомитися з моїми роботами та знайти натхнення. На головній сторінці представлені вибрані роботи, а меню праворуч веде до розділів Галерея та Референси.

У Галереї ви знайдете розширену добірку робіт, а також процеси їх створення. У розділі Референси — підбірка фотографій, які можуть надихнути на створення власного мистецтва.

Зареєстровані користувачі можуть входити в акаунт і додавати власні зображення. У Галереї та Референсах є система тегів, яка допомагає зручно фільтрувати зображення за темами.</p>
              </div>
            </div>
        </div> */}

        <div className="header-container">
          <div className="text-container left">
              <div className="text-paragraph left">
                  <p> Працюю з олійним та цифровим живописом.
                     Мій стиль поєднує елементи імпресіонізму та реалізму, з акцентом на впізнаваність і яскравість образів у мрійливій атмосфері.</p>
              </div>
            </div>
            <div className="image-container">
              <div className="logo-bat">
                  <img src={logo_bat} alt="" />
              </div>
            </div>
            <div className="text-container right">
              <div className="text-paragraph right">
                  <p>У своїй цифровій роботі я використовую Clip Studio Paint, поєднуючи традиційні техніки з сучасними — і навпаки.
                     Вірю, що кожна техніка збагачує іншу та відкриває нові творчі можливості.</p>
              </div>
            </div>
        </div>
      
      <div class='about-site-text-container'>
          <p class='text-paragraph text-center'>
            Ласкаво просимо до Галереї! Тут ви знайдете різноманітні роботи в різних техніках, а також фотографії, які можна використовувати як референси для створення мистецтва.
            </p>
      </div>

      <div class='parallax'>
        <div class='works-text-container'>
            <p class='text-paragraph text-center small-header works'>
              Роботи
            </p>
            <p class='text-paragraph text-center works'>
            Олія & Цифровий живопис
            </p>
        </div>
      </div>

      <div class='colored-box'>
      <div class='work-images-container'>
            {Object.entries(Images).map(([key, { src, alt, details }]) => (
              <div class='box'>
                <img src={src} alt={alt} />
                <div className="image-overlay">
                  <h3>{alt}</h3>
                  <p>{details}</p>
              </div>
            </div>
            ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;