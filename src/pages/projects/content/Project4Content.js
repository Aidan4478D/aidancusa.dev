// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project4Content() {
    return (
        <div className = "project-content-box">
            <h2>The BookCooper</h2>
            <p>
                From January through May 2024, Alex Liu (EE’25) and I spun up  
                <strong> The BookCooper</strong>. The site was built for the 
                class ECE366 - Software Engineering at the Cooper Union during the Spring 
                2024 semester. It is meant to be a Cooper‑only book swap platform 
                where old textbooks find new homes and nobody pays the full price twice. 
                The site uses ReactJS for the frontend, a Java SpringBoot 
                API in the middle, PostgreSQL at the back, and the whole thing lives 
                in Docker so the "works on my machine" excuse never shows its face.
            </p>
            <p>
                Users sign up with their email with Firebase authentication &
                session management, and 
                list their books for "Book Bucks" a.k.a B-Bucks. With these B-Bucks, 
                you can buy new textbooks of your own. Low on B‑Bucks? Stripe 
                handles a quick top‑up. We even tap Google Books and BooksRun 
                APIs to pull live prices so the trade prices are fair and square.  
                For now, it's a Cooper‑exclusive clubhouse, but the goal is to open it 
                up to book lovers everywhere.
            </p>

            <div className="image-gallery">
                <div className="gallery-item">
                    <img src="/projects/project4/bookcooper-database-schema.png" alt="Database Schema" />
                    <div className="gallery-caption">Database Schema</div>
                </div>

                <div className="gallery-item">
                    <img src="/projects/project4/bookcooper-backend.png" alt="Backend Block Diagram" />
                    <div className="gallery-caption">Backend Block Diagram</div>
                </div>

                <div className="gallery-item">
                    <img src="/projects/project4/bookcooper-figma.png" alt="Frontend in Figma" />
                    <div className="gallery-caption">Frontend in Figma</div>
                </div>
            </div>

            <p>
                Throughout the project, we worked on each of the layers in the stack
                together, from designing the database schema to figuring out how 
                to lay out the navigation bar buttons. We used Git for version
                control and project management, working on different branches,
                creating and merging pull requests, and keeping track of issues. 
                We used Postman to test the backend, and Azure CLI to deploy our 
                final containerized website. 
                <a href="https://github.com/BookCooper/TheBookCooper">
                     Click here to view the project repository!
                </a>
            </p>

            <div className="image-gallery">
                <div className="gallery-item">
                    <iframe
                        width="560" height="315"
                        src="https://www.youtube.com/embed/7GZMKT_HGFI?si=fh_4PmkMJ6JQ_TEb"
                        title="The BookCooper Site Demo"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className="gallery-caption">Final project demo video</div>
                </div>
            </div>
        </div>
    );
}

