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
                Its architecture follows a classical front-end/back-end design. The components within 
                each are shown in the block diagram below. Typically, compilers include a "middle-end" in
                between the front and back ends, optimizing the intermediate representation to make 
                assembly more efficient. Due to this compiler being completed as a part of a 15-week 
                course, there was practically no optimization done on the front-end IR as the primary
                purpose of the project was functionality.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-full-wide">
                    <img src="/projects/project13/compiler_flowchart3.png" alt="Compiler Pipeline Block Diagram" />
                    <div className="gallery-caption">Compiler Block Diagram</div>
                </div>
            </div>

            <p>
                For the purpose of explanation, the following code will be examined throughout 
                the compilation stages. For more examples and testing, you can clone my 
                compiler here: <a href="https://github.com/Aidan4478D/ECE466/tree/main/codegen"> Github repository</a>.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project13/compiler_code_example.png" alt="C Code to Quads Transformation" />
                    <div className="gallery-caption">Compiler Quad Generation</div>
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
                validated representation of the program’s meaning. Below is the ast generated for 
                function <code>main</code> in the code previously introduced (on the left). 
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project13/compiler_ast_outcome.png" alt="Compiler Abstract Syntax Tree Output" />
                    <div className="gallery-caption">Compiler Pipeline Architecture</div>
                </div>
            </div>
    
            <p>
                Once the AST has been built, the compiler converts it into an <strong>Intermediate 
                Representation (IR)</strong>. Rather than translating directly to
                assembly, the program is decomposed into <strong>Three-Address Code</strong>, represented
                internally as quads. Each quad expresses a single, simple operation with at most
                three operands, making complex expressions easier to reason about and transform.
                For example, an expression such as <code>a = b + c * d</code> is broken into multiple
                steps that explicitly capture evaluation order. This design simplifies later stages of
                code generation and mirrors the internal representations used by real-world compilers.

                Quads are grouped into <strong>Basic Blocks</strong> and linked together to form a <strong>Control 
                Flow Graph (CFG)</strong>. This representation makes the flow of execution
                explicit, particularly for conditionals, loops, and function calls. 
                
                Below is the control flow graph generated for function <code>f</code> 
                in the code previously introduced (on the left). Since there are no
                loops, there is only one basic block.
            </p>
    
            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project13/compiler_quad_outcome.png" alt="C Code to Quads Transformation" />
                    <div className="gallery-caption">Compiler Quad Generation</div>
                </div>
            </div>

            <h3> <u> Backend </u> </h3>
            <p> 
                At this point, the program’s control structure is fully resolved and ready to be mapped onto machine instructions.
                The <strong>Backend</strong> is responsible for translating the IR into executable
                32-bit x86 assembly code. This involves selecting appropriate machine instructions
                for each IR operation and managing the low-level details of memory and registers.
                IR operations such as arithmetic, comparisons, and branches are mapped directly
                onto their corresponding x86 instructions.

                Each function is assigned a stack frame, with local variables and parameters addressed
                at fixed offsets relative to the base pointer (<code>%ebp</code>). Temporary values
                produced during expression evaluation are allocated to a small set of callee-saved
                registers (<code>%ebx</code>, <code>%edi</code>, <code>%esi</code>), with stack spillover
                used when necessary. Function calls follow the standard x86 calling convention, with
                arguments passed on the stack and return values placed in <code>%eax</code>.

                The backend ultimately emits a complete <code>.S</code> assembly file, which can be
                assembled and linked using GCC to produce a runnable executable. For the same C
                source as before, the output assembly for the function <code>main</code> is below.
            </p>

            <div className="image-gallery">
                <div className="gallery-item-wide">
                    <img src="/projects/project13/compiler_assembly_outcome.png" alt="Final x86 Assembly Output" />
                    <div className="gallery-caption">Generated x86-32 Assembly</div>
                </div>
            </div>

            <p>
                Note that I know this is highly inefficient and it isn't a good practice to rotate 
                the <code>%ebx</code>, <code>%edi</code>, <code>%esi</code> as temporaries rather 
                than having proper register allocation. But, like I stated before, the goal of 
                this project was functionality, so although the assembly was inefficient, it 
                was straightforward and worked.
            </p>
            <p>
                Rather than designing and implementing a custom assembler and linker, the generated assembly is passed to
                <code>gcc -m32</code> for assembly and linking. This choice was because the focus of this
                project is the design and implementation of a compiler backend, not the reimplementation of
                platform-specific binary formats or relocation logic. By targeting GNU Assembler (GAS) syntax
                and relying on GCC’s existing toolchain, the compiler can produce standards-compliant object
                code while remaining portable across systems that support 32-bit x86 compilation. Thus, below
                shows the program's output after passing the C source code through my implemented compiler, 
                then passing the generated assembly into <code>gcc -m32</code>, and finally running the resulting 
                executable. 
            </p>

            <div className="image-gallery">
                <div className="gallery-item-full-wide">
                    <img src="/projects/project13/compiler_compiled_outcome.png" alt="Final x86 Assembly Output" />
                    <div className="gallery-caption">Generated x86-32 Assembly</div>
                </div>
            </div>
            
            <p>
                The first printed console statement shows the output from the printf in the C source. The second 
                printed statement shows the return code, which in this case should be <code>3+1=4</code>. Therefore,
                we can see that the compiler functions as intended.
        
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
