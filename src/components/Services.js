import React, { useRef } from 'react';

import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

import img1 from '../img/1.jpeg';
import img2 from '../img/3.jpeg';
import img3 from '../img/4.jpeg';
import img4 from '../img/5.jpeg';

import img_bat from '../img/bat.PNG';
import img_fly from '../img/butterfly.png';


gsap.registerPlugin(ScrollTrigger);
const Services = () => {

    const ref_left = useRef([]);
    const ref_right = useRef([]);

    useGSAP(
        () => {

            ref_left.current.forEach((item) => {
                gsap.fromTo(item, { x: -50, opacity: 0 }, {
                    x: 0, opacity: 1, scrollTrigger: {
                        trigger: item,
                        start: '-=850',
                        end: '-=100',
                        scrub: true
                    }
                })
            });
            ref_right.current.forEach((item) => {
                gsap.fromTo(item, { x: 50, opacity: 0 }, {
                    x: 0, opacity: 1, scrollTrigger: {
                        trigger: item,
                        start: '-=850',
                        end: '-=100',
                        scrub: true
                    }
                })
            });


        }
    );

    const addtoLeftRefs = (el) => {
        if (el && !ref_left.current.includes(el)) {
            ref_left.current.push(el);
        }
    }


    const addtoRightRefs = (el) => {
        if (el && !ref_right.current.includes(el)) {
            ref_right.current.push(el);
        }
    }

    return (
        <>
            <div className="services">
                <div className="container">
                    <div className="gallery">
                        <div className="gallery-left" data-speed=".9">
                            <img src={img_fly} alt="" className="gallery-item" ref={addtoLeftRefs} />
                            <div className="text-block gallery-item" ref={addtoLeftRefs}>
                                <h2>Референси</h2>
                                <p>Особлива увага приділяється референсам – зображенням та матеріалам, які можуть бути використані іншими художниками та творчими особистостями у своїх проектах. Ці референси ретельно відібрані та організовані за категоріями, щоб полегшити їх використання. Кожен користувач може додавати свої референси, розширюючи базу даних і роблячи її ще більш корисною для спільноти. Незалежно від того, чи ви професійний художник, чи тільки починаєте свій творчий шлях, ви знайдете тут багато цікавого та корисного.</p>
                            </div>

                            <img src={img1} alt="" className="gallery-item" ref={addtoLeftRefs} />

                        </div>
                        <div className="gallery-right" data-speed="1.1">
                            <div className="text-block gallery-item" ref={addtoRightRefs}>
                                <h2>Основне: Про сайт</h2>
                                <p>Ласкаво просимо на сайт художника! Тут ви знайдете колекцію робіт, виконаних у різних медіумах, таких як олія, акварель, акрил та цифрове мистецтво. Основні функції сайту включають галерею, де ви можете переглядати картини, та розділ з референсами, які можуть бути використані у творчих проектах.</p>
                            </div>
                            <img src={img3} alt="" className="gallery-item" ref={addtoRightRefs} />
                            <img src={img4} alt="" className="gallery-item" ref={addtoRightRefs} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
