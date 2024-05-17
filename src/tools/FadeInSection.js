import React, { useEffect, useState, useRef } from 'react';
import '../styles/FadeInSection.css';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        // Ensure the element is there to be observed
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Cleanup function
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
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

export default FadeInSection;
