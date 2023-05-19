import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import githubLogo from './images/github-mark-white.png';
import phone from './images/phone.png';
import email from './images/email.png';
import linkedinLogo from './images/linkedin-logo-png-1826.png';
import '../components/style.css';




const Contact = () => {


    return (
        <div className='contShell'>
            <div className='contLeft'>
                <Image className='contactlogo' src={linkedinLogo} alt='...'/>
                <h3>linkedin.com/in/erikdcarlson</h3>
            </div>
            <div className='contCenter'>
            <Image className='contactlogo2' src={phone} alt='...'/>425-466-6581
                <hr/> 
            <Image className='contactlogo2' src={email} alt='...'/>theroguechef@comcast.net
            </div>
            <div className='contRight'> 
            <Image className='contactlogo' src={githubLogo} alt='...'/>
                <h3>github.com/TheRogueChef</h3>
            </div>
        </div>
    )
}

export default Contact;