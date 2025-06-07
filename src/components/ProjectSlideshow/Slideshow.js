import React, { useState, useEffect } from "react";
import "../../styles/ProjectSlideshow.css";

const IMAGES = [
    { src: "/projects/multimodal_caption_verifier.png", caption: "Multimodal Caption Verifier" },
    { src: "/projects/ascii_tetris.jpg", caption: "ASCII Tetris" },
    { src: "/projects/bookcooper.png", caption: "The BookCooper" },
    { src: "/projects/scopetv.png", caption: "ScopeTV" },
    { src: "/projects/compiler_tiny.png", caption: "C99 Compiler" },
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
        <div className="slideshow-container">
        {IMAGES.map(({ src, caption }, i) => (
            <div
            key={i}
            className={`mySlides fade ${i === slideIndex ? "active" : ""}`}
            >
            <div className="numbertext">{i + 1} / {IMAGES.length}</div>
            {/* Use a CSS class instead of inline width so we can control height/width in CSS */}
            <img src={src} alt={caption} className="slide-image" />
            <div className="text">{caption}</div>
            </div>
        ))}

        <button className="prev" onClick={() => change(-1)}>&#10094;</button>
        <button className="next" onClick={() => change(1)}>&#10095;</button>

        <div className="dots-container">
        {IMAGES.map((_, i) => (
            <span
            key={i}
            className={`dot ${i === slideIndex ? "active" : ""}`}
            onClick={() => setSlideIndex(i)}
            />
        ))}
        </div>
        </div>
    );
}

