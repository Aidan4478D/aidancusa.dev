// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project3Content() {
    return (
        <div className="project-content-box">
            <h2>Mini CAN-Bus</h2>
            <p>
                Before joining the Cooper Union Intelligent Ground Vehicle 
                Competition team, I was part of the Drive-by-Wire Subteam in the
                class EID101 - Engineering Design and Problem Solving. Our primary 
                was to learn about robust and reliable software capable of 
                interpreting and transmitting sensor data effectively across 
                multiple embedded systems. To achieve this, I teamed up with two other students, Senik Zhou
                and Noam Shuck. Together, we created a mock CAN-bus communication 
                protocol for three sensors and four different Arduino Mega 2560 
                boards. This included coming up with our own CAN-frame scheme, 
                encoding and decoding the messages, verifying data integrity 
                through checksums, and ensuring timely communication by managing cycle times.
            </p>
            <p>
                We used the serial communication lines on the Arduinos, and
                structured three around a master-node architecture. 

                On these three child microcontrollers, each had its own sensor
                (heat sensor, untrasonic sensor, and IMU). Each child needed its own
                firmware to support its sensor, encoding the data, and sending
                it on the serial communication line. 

                The master microcontroller then maintained a structured set of variables 
                storing incoming data from sensor nodes. Because we wanted to simulate
                a system on a car, we implemented a finite state machine that dynamically 
                adjusted behavior based on the vehicle's state, including emergency stops, 
                active driving, idle modes, and hardware error states.
            </p>

            <div className="image-gallery">
                <div className="gallery-item">
                    <img src="/projects/arduino-with-ultrasound.jpg" alt="Game in action" />
                    <div className="gallery-caption">One child node with ultrasonic sensor</div>
                </div>
            </div>

            <p>
                Core functionalities were managed within an infinite loop structure, 
                calling the necessary routines via an array of function pointers. 
                This design ensured that sensor communications and system state transitions 
                were handled seamlessly and responsively.
            </p>
        </div>
    );
}

