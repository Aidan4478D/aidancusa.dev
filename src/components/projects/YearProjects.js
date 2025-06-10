import React from 'react';
import FadeInSection from '../../tools/FadeInSection';
import '../../styles/YearProjects.css';
import { useNavigate } from 'react-router-dom';

const COLUMNS = [
    {
        title: 'Freshman Year',
        imgSrc: 'projects/freshman_wires_cropped.jpg',
        description: 'Intro to circuits, C & python programming, and our first design projects.',
        link: '/projects/1',
    },
    {
        title: 'Sophomore Year',
        imgSrc: 'projects/sophomore-run-laplace-cropped.jpg',
        description: 'Software engineering, data structrues & algorithms, computer architecture, signal processing, introduction to electronics.',
        link: '/projects/4',
    },
    {
        title: 'Junior Year',
        imgSrc: 'projects/junior-gen-ml-cropped.jpg',
        description: 'Frequentist & generative machine learning, natural language processing, communication networks, operating systems, compilers, advanced electronics, independent studies',
        link: '/projects/7',
    },
    {
        title: 'Personal Projects',
        imgSrc: 'projects/personal.png',
        description: 'My personal interest projects!',
        link: '/projects/12',
    },
];
//
// do _blank to open in new tab
// const handleClick = (url) => window.open(url, '_blank');

const YearProjects = () => {
    const navigate = useNavigate();

    return (
        <FadeInSection>
        <div className="year-projects-container">
            {COLUMNS.map(({ title, imgSrc, description, link }, idx) => (
                <div key={idx} className="project-column">
                    <img src={imgSrc} alt={title} onClick={() => navigate(link)} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>
        </FadeInSection>
    );
};

export default YearProjects;

