import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import '../components/style.css';




const AboutMe = () => {


    return (
        <div className='AMShell' style={{
            backgroundImage: `transparent`, WebkitBackgroundSize: 'cover'
        }} >
            <h2>'Driven junior web developer and software designer who has successfully navigated a long and prosperous career as an artistic talented Executive Chef, company leader and team motivator successful at maintaining staff focus and productivity in high-volume, fast-paced operations.'</h2>
        </div>
    )
}

export default AboutMe;