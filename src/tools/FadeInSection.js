import React, { useEffect, useState, useRef } from 'react';
import '../styles/FadeInSection.css'


export default function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false); // Start with false if you want the fade effect on initial visibility
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In most cases, you'll be observing a single entry
            const entry = entries[0];
            setVisible(entry.isIntersecting);
        });

        observer.observe(domRef.current);

        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
