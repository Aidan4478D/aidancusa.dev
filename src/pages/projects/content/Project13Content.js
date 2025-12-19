// src/pages/projects/content/Project1Content.js
import React from 'react';
import '../../../styles/ProjectContent.css';


export default function Project13Content() {
    return (
        <div className="project-content-box">
            <h2>C99-Compliant Compiler</h2>
            <p>
                Compilers form the foundation of modern software systems, translating human-readable
                programming languages into low-level instructions that computer hardware can execute.
                In this project, I designed and implemented a compiler from scratch that translates a
                subset of the C99 standard into 32-bit x86 assembly. Rather than relying on existing
                compiler frameworks, every stage of the compilation process was built explicitly to
                expose the underlying mechanisms that govern how high-level programs become executable code.
            </p>
            <p>
                The compiler targets GNU Assembler (GAS) syntax and supports a wide range of core C features,
                including structured control flow (<code>if</code>, <code>while</code>, <code>for</code>),
                pointer arithmetic, function calls, and aggregate data types such as structs and unions.
                Its architecture follows a classical three-stage design: Frontend, Intermediate Representation (IR),
                and Backend. This allows each phase to focus on a well-defined responsibility while remaining
                modular and extensible.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    {/* TODO: Save the Mermaid block diagram I generated for you as an image 
                       (e.g., using mermaid.live) and save it to public/projects/project13/compiler-pipeline.png 
                    */}
                    <img src="/projects/project13/compiler-pipeline.png" alt="Compiler Pipeline Block Diagram" />
                    <div className="gallery-caption">Compiler Pipeline Architecture</div>
                </div>
            </div>

            <h3> <u> Frontend </u> </h3>
            <p>
                The compilation process begins in the <strong>Frontend</strong>, whose role is to interpret
                raw C source code and ensure that it is both syntactically and semantically valid.
                Lexical analysis is handled using <strong>Flex</strong>, which converts the source text
                into a stream of tokens representing keywords, identifiers, operators, and literals.

                A <strong>Bison</strong>-generated parser then uses these tokens and applies
                the C grammar to construct an <strong>Abstract Syntax Tree (AST)</strong>. The AST captures
                the hierarchical structure of the program, encoding expressions, statements, declarations,
                and control flow in a form that is independent of surface syntax.

                Alongside AST construction, the frontend maintains a scoped <strong>Symbol Table</strong>.
                This structure tracks variables, functions, and user-defined types across global, function,
                and block scopes, enforcing rules such as variable shadowing and distinct namespaces for
                identifiers and struct tags. By the end of this stage, the compiler has a complete and
                validated representation of the program’s meaning.
            </p>


            <h3> <u> Intermediate Representation </u> </h3>
            <p>
                Once the AST has been built, the compiler converts it into an <strong>Intermediate 
                Representation (IR)</strong>. Rather than translating directly to
                assembly, the program is decomposed into <strong>Three-Address Code</strong>, represented
                internally as <em>quads</em>. Each quad expresses a single, simple operation with at most
                three operands, making complex expressions easier to reason about and transform.
                For example, an expression such as <code>a = b + c * d</code> is broken into multiple
                steps that explicitly capture evaluation order. This design simplifies later stages of
                code generation and mirrors the internal representations used by real-world compilers.
            </p>
            <p>
                Quads are grouped into <strong>Basic Blocks</strong> and linked together to form a <strong>Control 
                Flow Graph (CFG)</strong>. This representation makes the flow of execution
                explicit, particularly for conditionals, loops, and function calls. At this point, the
                program’s control structure is fully resolved and ready to be mapped onto machine instructions.
            </p>
    
            <div className="image-gallery">
                <div className="gallery-item">
                    {/* TODO: Create a screenshot/image showing a snippet of C code on the left 
                       and the resulting Quads/IR on the right. Save to public/projects/project13/quads-example.png 
                    */}
                    <img src="/projects/project13/quads-example.png" alt="C Code to Quads Transformation" />
                    <div className="gallery-caption">Source Code to Intermediate Representation</div>
                </div>
            </div>

            <h3> <u> Backend </u> </h3>
            <p>
                The <strong>Backend</strong> is responsible for translating the IR into executable
                32-bit x86 assembly code. This involves selecting appropriate machine instructions
                for each IR operation and managing the low-level details of memory and registers.
                IR operations such as arithmetic, comparisons, and branches are mapped directly
                onto their corresponding x86 instructions.
            </p>
            <p>
                Each function is assigned a stack frame, with local variables and parameters addressed
                at fixed offsets relative to the base pointer (<code>%ebp</code>). Temporary values
                produced during expression evaluation are allocated to a small set of callee-saved
                registers (<code>%ebx</code>, <code>%edi</code>, <code>%esi</code>), with stack spillover
                used when necessary. Function calls follow the standard x86 calling convention, with
                arguments passed on the stack and return values placed in <code>%eax</code>.

                The backend ultimately emits a complete <code>.S</code> assembly file, which can be
                assembled and linked using GCC to produce a runnable executable.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    {/* TODO: Create an image showing the final generated x86 assembly code.
                       Save to public/projects/project13/assembly-output.png 
                    */}
                    <img src="/projects/project13/assembly-output.png" alt="Final x86 Assembly Output" />
                    <div className="gallery-caption">Generated x86-32 Assembly</div>
                </div>
            </div>

            <p>
                Building this compiler provided a comprehensive view of the program execution lifecycle.
                By implementing each phase from lexical analysis to stack-level code generation, I gained
                a deeper understanding of how language abstractions are systematically lowered into machine
                instructions. The project highlights both the elegance and complexity of compiler design,
                and serves as a practical foundation for further work in programming languages, systems,
                and performance-critical software.
            </p>
        </div>
    );
}
