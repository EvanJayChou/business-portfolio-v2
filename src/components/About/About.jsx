import React, {useEffect} from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        document.title="Evan Chou | About";
    } );

    return (
        <body id='about'>
            <main>
                <div id='aboutSection'>
                    <article id='descrip'>
                        <header className='title'>About Me!</header>
                        <h1>
                            Hello! I'm Evan Chou, an enthusiastic and dedicated college student with a fervor for exploring the 
                            intersection of hardware and software. I am eager to apply my skills and knowledge in machine learning and 
                            software engineering to contribute meaningfully to cutting-edge technology projects. My interests extend to 
                            quantum computing research and the latest innovations and solutions in artificial intelligence. With the aspirations 
                            to become a Systems Engineer, AI Engineer, or Machine Learning Engineer, I am committed to continuous learning and 
                            embracing challenges that propel me towards achieving these aspirations. 
                        </h1>
                        <h2>Designated in Los Angeles, California</h2>
                    </article>
                    <img src={require('../../assets/images/DataScienceIcon.png')} id='dataPic'/>
                </div>
                <article id='education'>
                    <header className='title' id='edTitle'>Education</header>
                    <div>
                        <section className='school'>
                            <img src={require('../../assets/images/PCCLogo.png')}/>
                            <h1>Pasadena City College</h1>
                            <h2>A.S. in Electrical Engineering</h2>
                            <h3>Coursework: Data Structures, Object-Oriented Programming, Engineering Circuits, Multivariable Calculus, Linear Algebra</h3>
                        </section>
                        <section className='school'>
                            <h1>4-year University</h1>
                            <h2>B.S. in Electrical Engineering</h2>
                            <h3>Concentration: Electronic Circuits & Systems</h3>
                        </section>
                    </div>
                </article>
            </main>
        </body>
    );
}

export default About;