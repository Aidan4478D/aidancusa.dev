import React from 'react';
import '../styles/Header.css';
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header>
                <div className = "buttons-and-name-conatiner"> 
                    <button className = "header-button-left" onClick={() => navigate('/about')}> About </button>
                    <button className = "header-button-left" onClick={() => navigate('/portfolio')}> Portfolio </button>
                    <h1 onClick={() => navigate('/')}> Aidan Cusa </h1>
                    <button className = "header-button-right" onClick={() => navigate('/tutoring')}> Tutoring </button>
                    <button className = "header-button-right" onClick={() => navigate('/contact')}> Contact </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
