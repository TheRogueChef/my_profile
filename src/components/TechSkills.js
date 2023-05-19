import React from 'react';
import { Image } from 'react-bootstrap';
import python from './images/python.png';
import javascript from './images/javascript.png';
import HTML from './images/HTML.png';
import CSS from './images/CSS.png';
import SQL from './images/SQL.png';
import Express from './images/Express.png';
import react from './images/react.png';
import nodejs from './images/nodejs.png';
import flask from './images/flask.png';
import MongoDB from './images/mongodb.png';
import mysql from './images/mysql.png';
import axios from './images/axios.png';
import postman from './images/postman.png';
import bootstrap from './images/bootstrap.png';
import tailwinds from './images/tailwinds.png';
import ajax from './images/ajax.png';
import django from './images/django.png';
import '../components/style.css';




const TechSkills = () => {


    return (
        <div style={{
            backgroundImage: `transparent`, WebkitBackgroundSize: 'cover'
        }} >
            <h1 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline', color: 'lightGray' }}>Technical Skills</h1>

            <div className='techShell'>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Languages</h3>
                    <Image className='techLogo' src={python} alt='...'/>- Python
                    <br /><br />                   
                    <Image className='techLogo' src={javascript} alt='...'/>- JavaScript
                    <br /><br />
                    <Image className='techLogo' src={HTML} alt='...'/>- HTML
                    <br /><br />
                    <Image className='techLogo' src={CSS} alt='...'/>- CSS
                    <br /><br />
                    <Image className='techLogo' src={SQL} alt='...'/>- SQL
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Frameworks/Libraries</h3>
                    <Image className='techLogo' src={react} alt='...'/>- REACT
                    <br /><br /> 
                    <Image className='techLogo' src={Express} alt='...'/>- Express (ES6)
                    <br /><br /> 
                    <Image className='techLogo' src={nodejs} alt='...'/>- Node.js
                    <br /><br /> 
                    <Image className='techLogo' src={flask} alt='...'/>- Flask
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Databases</h3>
                    <Image className='techLogo' src={MongoDB} alt='...'/>- MongoDB
                    <br /><br /> 
                    <Image className='techLogo' src={mysql} alt='...'/>- MySQL
                </div>
                <div className='techBox'>
                    <h3 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline' }}>Tools</h3>
                    <Image className='techLogo' src={axios} alt='...'/>- Axios
                    <br /><br /> 
                    <Image className='techLogo' src={postman} alt='...'/>- Postman
                    <br /><br /> 
                    <Image className='techLogo' src={bootstrap} alt='...'/>- Bootstrap
                    <br /><br /> 
                    <Image className='techLogo' src={tailwinds} alt='...'/>- Tailwinds
                    <br /><br /> 
                    <Image className='techLogo' src={ajax} alt='...'/>- AJAX
                    <br /><br /> 
                    <Image className='techLogo' src={django} alt='...'/>- Django 2.2
                </div>
            </div>
        </div>
    )
}

export default TechSkills;