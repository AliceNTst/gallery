import React from 'react';
import '../css/about.css'
import about_img from '../img/bat.PNG';
import LoginButton from '../components/LoginButton';
import Loader from '../components/Loader.js';
import Particles from "react-tsparticles";


const HomePage = () => {

  return (
    <div>
    <div className='about'>
        <div className='about-img-body'>
            <img src={about_img} alt="" class="about-img"/>
        </div>
        <div className='about-info'>
            <h1 className='about-title'>Про мене</h1>
            <h2 className='about-subtitle'>Коротко</h2>
            <p className='about-text'>
            Художниця, роботи якої представлені на цьому сайті, спеціалізується на живописі олією та цифровому мистецтві. Тут ви знайдете як її більш ранні роботи, виконані аквареллю та акрилом, так і пізніші твори. Вона постійно експериментує з різними техніками та стилями. Після завершення художньої школи вона продовжила своє самостійне навчання, пройшовши безліч онлайн-курсів і практик. Тепер, накопичивши багатий досвід і знання, художниця готова поділитися своєю творчістю з усім світом.
            </p>
            <p className='about-text'>
            Вона також захоплюється фотографією і використовує власні фотографії для створення своїх картин. Оскільки кількість референсів в її арсеналі постійно зростає, виникла потреба у створенні місця для їх зберігання та сортування. Так і був створений цей сайт.
            </p>
        </div>
    </div>
      {/* <LoginButton/> */}
      {/* <Loader/> */}
    </div>
  );
};

export default HomePage;
