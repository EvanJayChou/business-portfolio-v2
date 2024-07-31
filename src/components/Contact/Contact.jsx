import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <body id='contact'>
            <div id='image'>
                <img src={require('../../assets/images/DeepLearning.avif')}/>
            </div>
            <div id='contacts'>
                <header>Contact Me!</header>
                <div className='doc'>
                    <img src={require('../../assets/images/CallIcon.png')}/>
                    <h1>Phone: +1 (626)-512-1757</h1>
                </div>
                <div className='doc'>
                    <img src={require('../../assets/images/MailIcon.png')}/>
                    <h1>Email: evan.chou@live.com</h1>
                </div>
                <div className='doc'>
                    <img src={require('../../assets/images/LinkedInIcon.png')}/>
                    <h1>LinkedIn: Evan Chou</h1>
                </div>
            </div>
        </body>
    );
}

export default Contact;