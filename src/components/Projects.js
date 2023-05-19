import React from 'react';
import { Image } from 'react-bootstrap';
import KitSyncLogo from './images/KitSyncLogo.PNG';
import Author from './images/Author.jpg';
import NewProduct from './images/NewProduct.PNG';
import '../components/style.css';

const Projects = () => {
    return (
        <div className='pShell'>
            <h1 style={{ fontFamily: 'SokaRegular', textDecoration: 'underline'}}>Projects</h1>
            <div className='pBox'>
                <Image className='plogo' src={KitSyncLogo} alt='...' />
                <h1>Kitchen Sync</h1>
                <hr/>
                <h4 style={{ marginTop: '35px'}}>github.com/TheRogueChef/Kitchen_Sync</h4>
                <hr/>
                <ul>
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <div className='pBox'>
                <Image className='plogo' src={Author} alt='...' />
                <h1>Author, Author</h1>
                <hr/>
                <h4 style={{ marginTop: '35px'}}>github.com/TheRogueChef/Authors</h4>
                <hr/>
                <ul>
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
            <div className='pBox'>
                <Image className='plogo' style={{marginTop: '35px'}} src={NewProduct} alt='...' />
                <h1>Product Manager</h1>
                <hr/>
                <h5 style={{ marginTop: '50px', marginRight: '20px', marginLeft: '20px'}}>github.com/TheRogueChef/MERN_March/tree/main/week6/Product_Manager</h5>
                <hr/>
                <ul>
                    <li>- Created in JavaScript</li>
                    <li>- Utilized REACT, Express, Mongoose, Node.js, Bootstrap CSS</li>
                    <li>- Tools used: Axios, Postman, MongoDB</li>
                </ul>
            </div>
        </div >
    )
}

export default Projects;