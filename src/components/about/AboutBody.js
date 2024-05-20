import React from 'react';
import '../../styles/About.css';
import FadeInSection from '../../tools/FadeInSection'

const AboutBody = () => {

    const handleNavigate = (url) => {
        window.open(url, "_blank");
    }

    return (
        <div>
            <br/>
            <div className="about-container-video">
                <video height="auto" autoPlay muted loop>
                    <source src="videos/shrt_crop_natm_f3.mp4" type="video/mp4" />
                </video>
                <div className="overlay">
                    <h1 id = "top_text">About Me</h1>
                </div>
            </div>
            <br/> <br/> <br/> <br/>
            <FadeInSection>
                <div className="about-img-text-container">
                    <img src="about/family-photo-christmas.jpg" alt="Family Christmas" />
                    <p> My name's Aidan, and I'm an upcoming Junior at The Cooper 
                        Union majoring in electrical engineering! I grew up in 
                        Monroe, Connecticut and attended Masuk High School where 
                        I was an active member of the VEX Robotics team 4478D.
                        Currently, I'm interested in Deep Learning Engineering,
                        focusing on taking classes to aid this passion.
                        <br/><br/>
                        When not involved in academics, you could probably find 
                        me exploring the streets and parks in New York City, belting 
                        lyrics in concerts, playing music and games with friends, 
                        and much more! 
                    </p>
                </div>
            </FadeInSection>
            <br/> <br/> <br/> <br/>
            
            <div className="image-wide-container">
                <img src="about/cooper_wide.jpg" alt="The Cooper Union" className="wide-image" />
                <div className="centered-text">
                    <h2>The Cooper Union</h2>
                </div>
            </div>
            <hr/>

            <br/>
            <FadeInSection>
                <div className="about-img-text-container">
                    <p> The Cooper Union for the Advancement of Science and Art (The Cooper
                        Union) is a private institute located within the East Village in New 
                        York City. The school was founded in 1859 by Peter Cooper and offers
                        degrees in engineering, art, and architecture. 

                        <a className = "about-link" onClick={() => handleNavigate('https://cooper.edu/admissions/facts')}> 
                            Click here to learn more about The Cooper Union! 
                        </a> 

                        <br/> <br/> 
                        At The Cooper Union, I've learned to enjoy the world of 
                        electrical engineering more than I ever thought I would. 
                        I currently have a major GPA of 4.00, an overall GPA of 3.7, 
                        and I am on a track to graduate with a minor in computer 
                        science. Although I have only been a student for two years,
                        I have made countless memories with my friends here and 
                        appreciate what it has given me thus far.
                    </p>
                    <img src="about/chemlab-with-noam.jpg" alt="Chem Lab with Noam" />
                </div> 
            </FadeInSection>

            <br/> <br/>
            <FadeInSection>
                <div class="rc-table">
                    <table>
                        <tr>
                            <td>
                                <h2> Relevant Coursework <br/> Includes: </h2>
                            </td>
                            <td>
                                <h3>Sophomore Year</h3>
                                <ul>
                                    <li>Software Engineering</li>
                                    <li>Computer Architecture</li>
                                    <li>Data Structures and Algorithms II</li>
                                    <li>Circuit Analysis</li>
                                    <li>Signal Processing</li>
                                    <li>Electronics I</li>
                                    <li>Vector Calculus</li>
                                    <li>Partial & Ordinary Differential Equations</li>
                                    <li>Probability</li>
                                    <li>Physics II & III</li>
                                </ul>
                            </td>
                            <td>
                                <h3>Freshman Year</h3>
                                <ul>
                                    <li>Programming for Electrical Engineers</li>
                                    <li>Data Structures and Algorithms I</li>
                                    <li>Digital Logic Design</li>
                                    <li>Calculus I & II</li>
                                    <li>Introduction to Linear Algebra</li>
                                    <li>Physics Mechanics</li>
                                    <li>General Chemistry</li>
                                    <li>Engineering Design & Problem Solving</li>
                                    <li>Engineering Graphics (Drafting)</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>
            </FadeInSection>
        </div>
    );
}

export default AboutBody;
