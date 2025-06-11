// src/pages/projects/ProjectPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import ProjectNavigation from '../../components/projects/ProjectNavigation';
import PROJECTS from './ProjectConfig';
import '../../styles/ProjectPage.css';

import Project1Content from './content/Project1Content';
import Project2Content from './content/Project2Content';
import Project3Content from './content/Project3Content';
import Project4Content from './content/Project4Content';
import Project5Content from './content/Project5Content';
import Project6Content from './content/Project6Content';
import Project7Content from './content/Project7Content';
import Project8Content from './content/Project8Content';
import Project9Content from './content/Project9Content';
//import Project10Content from './content/Project10Content';
//import Project11Content from './content/Project11Content';

const CONTENT_MAP = {
    1: Project1Content,
    2: Project2Content,
    3: Project3Content,
    4: Project4Content,
    5: Project5Content,
    6: Project6Content,
    7: Project7Content,
    8: Project8Content,
    9: Project9Content,
    //11: Project11Content,
};

export default function ProjectPage() {
    const { projectId } = useParams();
    const pid = parseInt(projectId, 10);

    const project = PROJECTS.find(p => p.id === pid);
    const Content = CONTENT_MAP[pid];

    if (!project || !Content) {
        return (
            <>
                <Header />
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Project not found</h2>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />

            <ProjectNavigation />

            <div className="project-page-container">
                <div className="project-content-block">
                    <img src={project.src} alt={project.caption} className="project-page-image" />
                    <Content />
                </div>
            </div>

            <ProjectNavigation />

            <Footer />
        </>
    );
}

