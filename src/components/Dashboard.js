import React from 'react';
import { Image } from 'react-bootstrap';
import pngegg from './images/pngegg.png'
import '../components/style.css';


const Dashboard = () => {
    return (
        <div className='dashShell' style={{
            backgroundImage: `transparent`, WebkitBackgroundSize: 'cover'
        }} >
            <div className='dashLeft'>
                <h1>Erik D Carlson</h1>
            </div>
            <div className='dashRight'>
                <Image className='dashPic' src={pngegg} alt='...' />
            </div>
        </div>
    )
}

export default Dashboard;