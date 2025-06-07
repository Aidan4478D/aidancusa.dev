import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import App from './App';
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import TutoringPage from "./pages/TutoringPage"
import PortfolioPage from "./pages/PortfolioPage"

import Project1 from "./pages/projects/Project1" // ASCII tetries

import { BrowserRouter, Routes, Route } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tutoring" element={<TutoringPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects/:1" element={<Project1 />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

