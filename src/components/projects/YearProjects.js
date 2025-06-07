import React from 'react';
import FadeInSection from '../../tools/FadeInSection';
import '../../styles/YearProjects.css';

const COLUMNS = [
    {
        title: 'Freshman Year',
        imgSrc: '/projects/freshman.png',
        description: 'Intro to circuits, C & python programming, and our first design projects.',
        link: '/projects/freshman',
    },
    {
        title: 'Sophomore Year',
        imgSrc: '/projects/sophomore.png',
        description: 'Software engineering, data structrues & algorithms, computer architecture, signal processing, introduction to electronics.',
        link: '/projects/sophomore',
    },
    {
        title: 'Junior Year',
        imgSrc: '/projects/junior.png',
        description: 'Frequentist & generative machine learning, natural language processing, communication networks, operating systems, compilers, advanced electronics, independent studies',
        link: '/projects/junior',
    },
    {
        title: 'Personal Projects',
        imgSrc: '/projects/personal.png',
        description: 'My personal interest projects!',
        link: '/projects/personal',
    },
];

const YearProjects = () => {
    const handleClick = (url) => window.open(url, '_blank');

    return (
        <FadeInSection>
        <div className="year-projects-container">
        {COLUMNS.map(({ title, imgSrc, description, link }, idx) => (
            <div key={idx} className="project-column">
                <img
                    src={imgSrc}
                    alt={title}
                    onClick={() => handleClick(link)}
                />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        ))}
        </div>
        </FadeInSection>
    );
};

export default YearProjects;

