// src/pages/projects/content/Project15Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project16Content() {
    return (
        <div className="project-content-box">
            <h2>Dear Address</h2>

            <p>
                Dear address!
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project15/sae_feat366_degrade.png" alt="Decision boundary after degrading SAE feature 366" />
                    <div className="gallery-caption">
                        <strong>Degrading</strong> (zeroing) feature 366 changes the boundary less dramatically, implying other features can compensate.
                    </div>
                </div>
            </div>
        </div>
    );
}

