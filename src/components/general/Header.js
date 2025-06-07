import React from 'react';
import '../../styles/Header.css';
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <div>
            <header>
                <h1 onClick={() => navigate('/')}> Aidan Cusa </h1>
                <div className = "header-nav"> 
                    <button className = "header-button" onClick={() => navigate('/about')}> About </button>
                    <button className = "header-button" onClick={() => navigate('/portfolio')}> Portfolio </button>
                    <button className = "header-button" onClick={() => navigate('/tutoring')}> Resume </button>
                    <button className = "header-button" onClick={() => navigate('/contact')}> Contact </button>
                </div>
            </header>
        </div>
    );
}

export default Header;
