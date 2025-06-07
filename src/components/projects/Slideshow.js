import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/ProjectSlideshow.css";

const IMAGES = [
    { 
        src: "/projects/multimodal_caption_verifier.png", 
        caption: "Multimodal Caption Verifier",
        path: "/projects/:1",
    },
    { 
        src: "/projects/ascii_tetris.jpg", 
        caption: "ASCII Tetris",
        path: "/projects/:1",
    },
    { 
        src: "/projects/bookcooper.png", 
        caption: "The BookCooper",
        path: "/projects/:1",
    },
    { 
        src: "/projects/scopetv.png", 
        caption: "ScopeTV",
        path: "/projects/:1",
    },
    { 
        src: "/projects/compiler_tiny.png", 
        caption: "C99 Compiler",
        path: "/projects/:1",
    },
];

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(0);

    // Whenever slideIndex changes (auto or manual), schedule the next advance in 5s
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex(i => (i + 1) % IMAGES.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [slideIndex]);

    const change = delta => {
        setSlideIndex(i => {
            let next = i + delta;
            if (next < 0) next = IMAGES.length - 1;
            if (next >= IMAGES.length) next = 0;
            return next;
        });
    };

    return (
        <>
        <div className="slideshow-container">
        {IMAGES.map(({ src, caption, path }, i) => (
            <div
            key={i}
            className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
            >
            <Link to={path} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="numbertext">{i + 1} / {IMAGES.length}</div>
                <img src={src} alt={caption} className="slide-image" />
                <div className="text">{caption}</div>
            </Link>
            </div>
        ))}

        <button className="prev" onClick={() => change(-1)}>&#10094;</button>
        <button className="next" onClick={() => change(1)}>&#10095;</button>

        </div>
        <div className="dots-container">
        {IMAGES.map((_, i) => (
            <span
            key={i}
            className={`dot ${i === slideIndex ? "active" : ""}`}
            onClick={() => setSlideIndex(i)}
            />
        ))}
        </div>
        
        </>
    );
}

