// src/components/projects/ProjectNavigation.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/ProjectNavigation.css';
import PROJECTS from '../../pages/projects/ProjectConfig.js';

export default function ProjectNavigation() {
    const { projectId } = useParams();

    // find the index of the current project
    const idx = PROJECTS.findIndex(p => p.id.toString() === projectId);
    if (idx === -1) return null; // no match

    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    return (
        <div className="project-nav-container">
            <Link to={prev.path} className="project-nav-link prev"> ← {prev.caption} </Link>
            <Link to={next.path} className="project-nav-link next"> {next.caption} → </Link>
        </div>
    );
}

