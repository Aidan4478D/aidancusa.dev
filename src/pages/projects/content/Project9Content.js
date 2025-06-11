// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project9Content() {
    return (
        <div className = "project-content-box">
            <h2>Cocktail Party Problem</h2>
            <p>
                The cocktail party problem is a classic scenario in signal processing 
                where the goal is to isolate individual voices from a mix of 
                overlapping conversations. It's just like trying to focus on one person 
                speaking in a noisy room.
                
                While humans can do this effortlessly thanks to our ability to 
                track spatial cues, voice characteristics, and contextual understanding,
                it's a much harder task for machines. Computers don't naturally 
                "understand" what a voice is or how to distinguish it from noise.
            </p>
            <p>
                In this project, Isiah Rivera (EE'25), Tzu Kuan Liao (AR'26), 
                Xinyu (Lesley) Lai (AR'27) and I exploited the computer's inability to 
                process multiple voices at once to interpret the voice of the 
                collective. The class, ECE471 - Generative Machine Learning for
                Engineering, Art, and Architecture, is a graduate level course that
                combines the three disciplines of the Cooper Union. It mixes
                the abstract thinking of artists and architects with the technical
                skills of engineers to create a generative form of art. 

                Our goal was to record speech from the audience
                on two pillars within the Cooper Union's Great Hall during an
                event surrounding generative art. We used microphones attached to 
                each pillar to record audio from the surrounding areas and
                &nbsp;<a href="https://github.com/collabora/WhisperLive">WhisperLive</a>&nbsp;
                to translate the audience chatter into words. To vizualize what the
                the pillar had "heard", we included two monitors attached to
                the pillars right above each microphone. On them, anyone can see both
                what was interpreted by the microphone on the column in front of them 
                and also the microphone on the other column. With this, there's a sense
                of communication between both columns, uniting the Great Hall audience's
                conversation.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project9/gen-ml-me-talking.JPG" alt="Aidan Talking into Monitor" />
                        <div className="gallery-caption">Me Speaking into Monitor</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project9/gen-ml-monitor.JPG" alt="Monitor on the Pillar" />
                        <div className="gallery-caption">Monitor on the Pillar</div>
                    </div>
                </div>
            </p>
            <p>
                The data collection period lasted 30 minutes, from when the audience
                was arriving to their seats to when the event officially started.
                With this interpreted speech from the microphones on both pillars
                and WhisperLive, we wanted to analyze whether or not the picked
                up words were related to each other in any way. Thus, we combined
                the output interpretation from both columns and prompted ChatGPT
                to summarize the transcript using different human personalities for fun.

                Some of my favorites were summarizing the speech as Eminem, 
                Donald Trump, or a "Gen Z Brainrot Kid". We then printed out these
                summarizations onto specially designed cardstock surrounding our
                project and handed them out to the audience as a postcard while
                they were exiting the event space.

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project9/gen-ml-postcard.png" alt="Aidan Talking into Monitor" />
                        <div className="gallery-caption">Final Postcard Design with Summary</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project9/gen-ml-me-handing-out.JPG" alt="Monitor on the Pillar" />
                        <div className="gallery-caption">Me Handing out Postcards</div>
                    </div>
                </div>

                While there were design considerations we all agreed we could
                have made better, the project was an overall success that used
                an unsolved problem to create art.
            </p>
        </div>
    );
}

