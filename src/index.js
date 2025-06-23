import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';


import App from './App';
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import PortfolioPage from "./pages/PortfolioPage"
import ProjectPage from './pages/projects/ProjectPage';
import ScrollToTop from './components/general/ScrollToTop.js'

import { HashRouter, Routes, Route, Navigate } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <ScrollToTop />
        <Routes>

            <Route path="/index.html" element={<Navigate to="/" replace />} />

            <Route path="/" element={<App />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
        </Routes>
    </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

