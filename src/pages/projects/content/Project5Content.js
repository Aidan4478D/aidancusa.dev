// src/pages/projects/content/Project1Content.js

import React from 'react';
import '../../../styles/ProjectContent.css';

export default function Project1Content() {
    return (
        <div className = "project-content-box">
            <h2>16-Bit CPU</h2>
            <p>
                From April to May in the 2024 Spring Semester, Kristof 
                Jablonowski (EE'26) and I built a fully functioning single‑cycle
                16‑bit CPU completely in Verilog for the class ECE251 - Computer Architecture.
                
                Heavily referencing the Sixth Edititon of <i> Computer Organization 
                and Design MIPS Edition </i> by Patterson and Hennessy, we designed 
                the CPU surrounding MIPS architecture but shrank everything into a tidy 16‑bit word.  

                We followed the Von Neumann Architecture style and created components 
                in Verilog like the PC, register file, ALU, control, muxes, and the 
                different memory locations. We created our own instruction set
                architecture so that every instruction (R‑type arithmetic, 
                I‑type immediates, and J‑type jumps) fit the same footprint, 
                so the datapath stays clean. &nbsp;
                
                <a href="https://github.com/Aidan4478D/ECE251/blob/main/cpu/16-Bit_CPU_ISA.docx">
                    Click here to see the full instruction set architecture.
                </a>

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project5/comparch-instruction-set.png" alt="9th Fibonacci Number Output" />
                        <div className="gallery-caption">Custom Instruction Set Architecture</div>
                    </div>
                </div>
            </p>

            <p>
                To test our CPU, we ran two programs, leaf.asm and fib.asm. The first
                program, leaf.asm included a large set of assembly operations
                where we can check if the output of each instruction is correct. The
                second file, fib.asm, computes the fibonacci sequence of the n'th 
                fibonacci number. Check out the images below to see the outputs
                of leaf.asm and fib.asm on our CPU!

                <div className="image-gallery">
                    <div className="gallery-item">
                        <img src="/projects/project5/comparch-fibonacci-output.png" alt="9th Fibonacci Number Output" />
                        <div className="gallery-caption">9th Fibonacci Number Output</div>
                    </div>

                    <div className="gallery-item">
                        <img src="/projects/project5/comparch-leaf-output.png" alt="leaf.asm Instructions and Output" />
                        <div className="gallery-caption">leaf.asm Instructions and Output</div>
                    </div>
                </div>
            </p>

            <p>
                To make our assembly less error prone and our lives easier, I also
                wrote a custom programmatic assembler in python. That means that you
                can write your program in MIPS assembly, pass it thorugh the assembler,
                and it will transform the instructions into the 16-bit binary that 
                can be run on the CPU. &nbsp;

                <a href="https://github.com/Aidan4478D/ECE251/tree/main/cpu">
                    Click here to view the full CPU repository!
                </a>
            </p>
            
            <br/>

            <p> <i> Note that the cover image is from the Sixth Edition of 'Computer Organization and Design MIPS Edition' by Patterson and Hennessy. </i> </p>
        </div>
    );
}

