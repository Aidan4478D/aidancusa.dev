// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project13Content() {
    return (
        <div className = "project-content-box">
            <h2>ASCII Tetris</h2>
            <p>
                This terminal tetris game was made for my final project in
                ECE160 - Programming for Electrical Engineers during the 
                Cooper Union Fall 2022 semester. This was an introductory class
                to C and Python, tailored to be slightly more challenging than
                the general introductory computer science course for all engineering majors. Within the 
                course, we learned C and Python fundamentals through creating 
                games like 'SOS' and 'Go Fish'. For my final project, I decided 
                to re-create tetris in the terminal. 
                
                I wanted to design the game to be as close to classical tetris
                as I could without using online references or tutorials to create 
                the game logic. 
            </p>
            <p>
                The game is written in C and it includes features like piece 
                stacking, rotation, row clearing, tetris clearing (bonus points), 
                dynamic level‐based speed increases, and a points system mirroring 
                the original arcade rules. It uses ncurses for the UI and displays
                the next four pieces (for those good at look-ahead), score, level, 
                cleared lines, and instructions during the runtime of the game. 
                
                <br/> <br/>
                <a href="https://github.com/Aidan4478D/ascii_tetris">
                    Click here to view the game repository!
                </a>
            </p>
        </div>
    );
}

