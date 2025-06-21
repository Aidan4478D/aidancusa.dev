import React from 'react';
import '../../styles/About.css';
import FadeInSection from '../../tools/FadeInSection'
import { Link } from 'react-router-dom';

const AboutBody = () => {

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
            <br/>
            <FadeInSection>
                <div className="about-img-text-container Dark">
                    <img src="about/family-photo-christmas.jpg" alt="Family Christmas" />
                    <p> My name's Aidan, and I'm an incoming Senior at The Cooper 
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
            <br/>
            
            <hr/>
            <div className="image-wide-container">
                <img src="about/cooper-wide.jpg" alt="The Cooper Union" className="wide-image" />
                <div className="centered-text">
                    <h2>The Cooper Union</h2>
                </div>
            </div>
            <hr/>

            <br/>
            <FadeInSection>
                <div className="about-img-text-container Light">
                    <p> The Cooper Union for the Advancement of Science and Art (The Cooper
                        Union) is a private institute located within the East Village in New 
                        York City. The school was founded in 1859 by Peter Cooper and offers
                        degrees in engineering, art, and architecture. 

                        &nbsp;
                        <a className = "about-link" href="https://cooper.edu/admissions/facts" target="_blank" rel="noreferrer"> 
                            Click here to learn more about The Cooper Union! 
                        </a> 

                        &nbsp;

                        <br/> <br/> 
                        At The Cooper Union, my passion for electrical engineering 
                        and computer science 
                        has grown through rigorous coursework and hands-on projects. 
                        I currently hold a 4.00 major GPA and a 3.77 overall GPA. 
                        I'm enrolled in the dual-degree Bachelor’s and Master’s of 
                        Engineering program in Electrical Engineering, with a minor 
                        in Computer Science. Over the past three years, I've collaborated 
                        with peers on complex design challenges and built lasting 
                        connections that have enriched both my personal and academic growth.&nbsp;
                        <Link to="/portfolio" className="about-link">
                            Click here to see some of the projects I've worked on!
                        </Link>
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
                                <h2> Relevant Coursework </h2>
                                <span> (*) Denotes ECE Course </span> <br/>
                                <span> (**) Denotes Graduate ECE Course </span>
                            </td>
                            <td>
                                <h3>Junior Year</h3>
                                <ul>
                                    <li>** Frequentist Machine Learning </li>
                                    <li>** Natural Language Processing </li>
                                    <li>** Generative Machine Learning </li>
                                    <li>** Experimentation with PyTorch </li>
                                    <li>** Compilers </li>
                                    <li>* Communication Networks </li>
                                    <li>* Computer Operating Systems </li>
                                    <li>* Prob. Models & Stochastic Processes </li>
                                    <li>* Digital Signal Processing </li>
                                    <li>* Electronics II </li>
                                    <li> Discrete Mathematics </li>
                                    <li> Engineering Management </li>
                                    <li> Finance </li>
                                </ul>
                            </td>
                            <td>
                                <h3>Sophomore Year</h3>
                                <ul>
                                    <li>* Software Engineering</li>
                                    <li>* Computer Architecture</li>
                                    <li>* Data Structures and Algorithms II</li>
                                    <li>* Circuit Analysis</li>
                                    <li>* Signal Processing</li>
                                    <li>* Electronics I</li>
                                    <li>Vector Calculus</li>
                                    <li>Partial & Ordinary Differential Equations</li>
                                    <li>Probability</li>
                                    <li>Physics II & III</li>
                                </ul>
                            </td>
                            <td>
                                <h3>Freshman Year</h3>
                                <ul>
                                    <li>* Programming for EEs</li>
                                    <li>* Data Structures and Algorithms I</li>
                                    <li>* Digital Logic Design</li>
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
            
            <br/> <br/>
            <FadeInSection>
                <div className="about-img-text-container Dark">
                    { /* <img src="about/igvc-photo.jpg" alt="IGVC Team Photo" /> */ }
                    <img src="about/icpc-2024-team.png" alt="ICPC 2024 Team"/>
                    <p> In additon to my coursework, I'm involved in numerous
                        clubs and organizations at The Cooper Union such as 
                        the Google Student Developer Club, the Badminton Club,
                        and IEEE. I'm on Team A of the school's International
                        Collegiate Programming Competition Team (pictured on the left!) and a former member 
                        of the Intelligent Ground Vehicle Compeition (IGVC) Team.
                        There, I worked within the Drive-By-Wire subteam on the car's battery 
                        monitor firmware. 

                        <br/><br/>

                        In my junior year I was inducted into Tau Beta Pi, the School 
                        of Engineering's honor society, and Eta Kappa Nu, the Electrical 
                        Engineering honor society. Junior year admission is highly 
                        selective: Tau Beta Pi invites only the top 12.5% of the 
                        entire engineering class (15 students), while Eta Kappa Nu selects the 
                        top 20% of electrical-engineering students (5 students).
                    </p>
                </div>
                <div className="about-img-text-container Light">
                    <p>
                        I hold two part-time positions on campus as a Student
                        Manager at Brooks Lab Computer Center and as a Group Tour
                        Guide for the Albert Nerken School of Engineering. In 
                        addition to these jobs, I often work temporary jobs for 
                        the school such as a technician for the 2024 job fair,
                        an organizer for the End of the Year Show, and a Campus 
                        Orientation Guide for incoming freshmen!
                    </p>
                    <img src="about/cooper-badminton.jpg" alt="Cooper Badminton 2023" />
                </div>
            </FadeInSection>

            <br/><br/><br/>
            
            <hr/>
            <div className="image-wide-container">
                <img src="about/masuk-wide.jpg" alt="Masuk High School" className="wide-image" />
                <div className="centered-text">
                    <h2>High School & Robotics</h2>
                </div>
            </div>
            <hr/>
            
            <br/><br/><br/>

            <FadeInSection>
                <div className="about-img-text-container Light">
                    <p> 
                        I joined my High School's VEX Robotics program in my Freshman 
                        year of High School and formed a team with a couple of my close 
                        friends. The VEX Robotics Compeittion (VRC) is the largest and 
                        fastest growing middle school and high school robotics program 
                        globally with more than 20,000 teams from 50 countries playing 
                        in over 1,700 competitions worldwide. Each year, an engineering 
                        challenge is presented in the form of a game where the students 
                        build innovative robots and compete year-round. &nbsp;

                        <a className = "about-link" href="https://roboticseducation.org/vex-robotics-competition/" target="blank" rel="noreferrer"> 
                            To learn more about VEX Robotics or this year's game, click here! 
                        </a>

                        &nbsp;

                        On my team, I took on the role as the programmer and we 
                        became team 4478D.
                    </p>
                </div>
                <div className="about-img-text-container Light">
                    <img src="about/robotics/team-photo-2019.jpg" alt="2019 Robotics Team" />
                    <p>
                        We quickly found our stride, winning the first three 
                        tournaments we attended, and placing as finalists in 
                        another four. We made it to the semi-finals of the
                        Southern New England Regional Compeititon, and found 
                        our way to the World Championships at the end of the year 
                        where we placed 28/93 in our division. 
                    </p>
                    <img src="about/robotics/worlds-screen-2019.jpg" alt="2019 Robotics Worlds" />
                </div>
            </FadeInSection>
            
            <FadeInSection>
                <div className="about-img-text-container Dark">
                    <p>
                        In the next years (2019-2020) season, our team went on to win five
                        tournaments, one of them being a national championship.
                        Additionally, we set the world record for the highest 
                        scoring 15-second autonomous mode. We qualified to go to
                        the world championships but were ultimately unable to 
                        participate in the event as well as the regional championships
                        due to the COVID-19 pandemic. 
                    </p>
                    <img src="about/robotics/natm-champs-2020.jpg" alt="2020 NATM Champs" />
                </div>
                
                <div className="about-img-text-container Dark">
                    <img src="about/robotics/natm-match-2020.jpg" alt="2020 NATM Match" />

                    <span> <iframe width="444" height="250" src="https://www.youtube.com/embed/bhACJ6sQ1go?si=oaN63Rzyedrkt1Q3" 
                        title="YouTube video player" frameborder="0" allow="accelerometer; 
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                    </iframe> </span>

                    <img src="about/robotics/team-photo-2020.JPG" alt="2020 Robotics Team" />
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="about-img-text-container Light">
                    <p>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/L9lCQwYtMQg?si=MC7VH6EwKfJE7LAn" 
                            title="YouTube video player" frameborder="0" allow="accelerometer; 
                            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                        </iframe>
                    </p>
                    <p>
                        The 2020-2021 season's game occured during the pandemic, where
                        tournaments were almost all remote and in-person contact was 
                        limited. Despite these challenges, we were still able to set
                        the 3rd highest skills score in the world and 1st in the
                        United States in the early season.

                        <br/><br/>
                        
                        We participated in one in-person competition and one fully
                        remote competition where we were able to become tournament
                        champions in both settings. 
                    </p>
                </div>
            </FadeInSection>

            <FadeInSection>
                <div className="about-img-text-container Dark">
                     <p>
                        Finally in our senior year during the 2021-2022 season, 
                        we were able to rank first in 6/10 tournaments we attended, 
                        going undefeated at both the Southern New England Regional 
                        Championships and the VEX Robotics World Championships during 
                        the qualifying rounds.

                        <br/><br/>

                        Our team was able to win the Southern New England Regional
                        Championships and accumualte other awards at the event such
                        as the skills challenge champions and the amaze award for
                        having the highest consistently scoring robot. 

                    </p>
                    <img src="about/robotics/regionals-team-photo-2022.jpg" alt="2022 Regionals Team" />
                    <img src="about/robotics/rank-1-2022.jpg" alt="2022 Rank 1" />

                </div>
                <div className="about-img-text-container Dark">
                    <img src="about/robotics/worlds-team-photo-2022.jpg" alt="2022 Worlds Team" />
                    <p>
                        We were able to travel to San Fransisco, CA, and Dallas, TX, to
                        compete with top tier teams going far in each tournament. 
                        
                        <br/><br/>

                        At the World Championships that year, we ranked second in our
                        divison, being one of only five teams in the competition to
                        go undefeated in the qualifying rounds. Although we ultimately 
                        lost in the semi-finals, our team was awarded the Inspire Award, 
                        an award given to the team that "will have a clear vision 
                        for their future and will participate with both a high level 
                        of integrity and good sportsmanship, believing they can achieve 
                        what they set out to achieve through their diligence"
                    </p>
                </div>
                <div className="about-img-text-container Dark">
                    <p>
                        At the end of the season, our team was 
                        <strong> ranked #9 in the world </strong> 
                        out of 20,000+ teams.
                    </p>
                </div>
            </FadeInSection>
            
            <br/><br/>

            <FadeInSection> 
                <div className="about-img-text-container Medium">
                    <img src="about/aqua-logo.jpg" alt="2022 Regionals Team" />
                    <img src="about/holding-squid.jpg" alt="2022 Regionals Team" />
                    <p>
                        While in high school, in addition to attending Masuk, I was also
                        enrolled in the Bridgeport Regional Aquaculture Science and 
                        Technology Education Center (BRASTEC or Aqua). 
                        
                        <br/> <br/>
        
                        There, I took my general science courses such as biology, 
                        chemistry, and physics, but also engaged in oceanography, 
                        analytical chemistry, costal navigation & piloting, and 
                        other marine courses. Weekly class were held on the     
                        school's research vessel, studying and identifying organisms 
                        in the Long Island Sound. Additionally, I captained the school's 
                        National Ocean Sciences Bowl Team my senior year (2022)
                        where we ended as regional semi-finalists. 
                    </p>  
                </div>
            </FadeInSection>
            
            <div className = "center-text-no-wide"> <h2> <center> Activities & Hobbies </center> </h2> </div>

            
            <FadeInSection> 
                <div className="about-img-text-container Light">
                    <p>
                        Although I do spend a lot of time working on academics
                        and related ventures, I try to not let it consume my life.
                        Some activities that I enjoy doing are on the right!
                    </p>
                    <div class="rc-table Inside">
                        <table>
                            <tr>
                                <td>
                                    <ul>
                                        <li>Solving Rubik's Cubes (3x3 PR is 19.45s)</li>
                                        <li>Playing Music (guitar, drums, piano)</li>
                                        <li>Producing Music</li>
                                        <li>Knitting</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Brewing Tea</li>
                                        <li>Reading</li>
                                        <li>Chess</li>
                                        <li>Video Games</li>
                                        <li>Hanging out with friends and family</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </FadeInSection>


        </div>
    );
}

export default AboutBody;
