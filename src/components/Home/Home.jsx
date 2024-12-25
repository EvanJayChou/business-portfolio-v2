import React, {useEffect} from 'react';
import NavBar from '../NavBar/NavBar'
import './Home.css';

const Home = () => {
    useEffect(() => {
        document.title="Evan Chou's Business Portfolio";
    } );
    return (
        <body>  
            <section id='pic'>
                <img src={require('../../assets/images/Portrait.jpg')}/>
            </section>
            <section id='side'>
                <div>
                    <h1>Test</h1>
                </div>
            </section>
            <section id='text'>
                <div id='name'>
                    <h2>Hi! My name is</h2>
                    <h1>Evan J. Chou</h1>
                    <h2>Aspiring AI/ML Engineer, Data Scientist,<br/>Robotics Systems Engineer</h2>
                </div>
                <div id='icons'>
                    <a href='https://www.linkedin.com/in/evanjchou/' target='_blank'><img src={require('../../assets/images/LinkedInIcon.png')}/></a>
                    <a href='https://github.com/EvanJayChou' target='_blank'><img src={require('../../assets/images/GitHubIcon.png')}/></a>
                    <a id='resume' href={require('../../assets/Evan Chou Job Resume 2023 v4.pdf')} target='_blank'>Download Resume</a>
                </div>
            </section>
        </body>
    );
}

export default Home;