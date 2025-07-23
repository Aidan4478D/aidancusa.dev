import React from 'react';
import { useNavigate } from 'react-router-dom';
import FadeInSection from '../../tools/FadeInSection';
import '../../styles/LandingActions.css';

const ACTIONS = [
    {
        title: 'Get to Know Me',
        imgSrc: '/about/microsoft-square.jpg',
        link: '/about',
        external: false,
    },
    {
        title: 'Explore My Work',
        imgSrc: '/about/theremin-setup-square.jpg',
        link: '/portfolio',
        external: false,
    },
    {
        title: 'View My Resume',
        imgSrc: '/about/resume-cover.jpg',
        link: '/2025_Fall_Aidan_Cusa_Resume.pdf',
        external: true, // opens in new tab
    },
];

export default function LandingActions() {
    const navigate = useNavigate();

    const handleClick = ({ link, external }) => {
        if (external) {
            window.open(link, '_blank');
        } else {
            navigate(link);
        }
    };

    return (
        <FadeInSection>

        <div className="landing-actions-container">
            {ACTIONS.map((action, idx) => (
                <div key={idx} className="action-column" onClick={() => handleClick(action)} >
                    <div className="image-wrapper">
                    <img src={action.imgSrc} alt={action.title} />
                    <div className="overlay" />
                        <div className="overlay-text">{action.title}</div>
                    </div>
                </div>
            ))}
        </div>

        </FadeInSection>
    );
}

