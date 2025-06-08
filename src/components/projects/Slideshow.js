// src/components/ProjectSlideshow/Slideshow.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PROJECTS from '../../pages/projects/ProjectConfig';
import '../../styles/ProjectSlideshow.css';

const SELECTED_IDS = [1, 4, 10, 11, 12];

export default function Slideshow() {
    // only include selected projects
    const slides = PROJECTS.filter((p) => SELECTED_IDS.includes(p.id));

    const [slideIndex, setSlideIndex] = useState(0);

    // auto-advance timer resets whenever slideIndex changes
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex((i) => (i + 1) % slides.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [slideIndex, slides.length]);

    const change = (delta) =>
        setSlideIndex((i) => {
            let next = i + delta;
            if (next < 0) next = slides.length - 1;
            if (next >= slides.length) next = 0;
            return next;
        });

    return (
        <>
        <div className="slideshow-container">
            {slides.map(({ src, caption, path }, i) => (
                <div key={i} className={`mySlides fade ${i === slideIndex ? 'active' : ''}`} >
                <Link to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="numbertext">
                        {i + 1} / {slides.length}
                    </div>
                    <img src={src} alt={caption} className="slide-image" />
                    <div className="text">{caption}</div>
                    </Link>
                </div>
            ))}

            <button className="prev" onClick={() => change(-1)}>
                &#10094;
            </button>
            <button className="next" onClick={() => change(1)}>
                &#10095;
            </button>
        </div>

        <div className="dots-container">

            {slides.map((_, i) => (
                <span key={i} className={`dot ${i === slideIndex ? 'active' : ''}`} onClick={() => setSlideIndex(i)} />
            ))}

        </div>
        </>
    );
}

