import React from 'react';
import Dashboard from '../components/Dashboard';
import WorkRecord from '../components/WorkRecord';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import TechSkills from '../components/TechSkills';
import Projects from '../components/Projects';
import '../components/style.css';


const DisplayPage = () => {
    return (
        <div>
            <Dashboard />
            <AboutMe />
            <Projects />
            <TechSkills />
            <WorkRecord />
            <Contact />
        </div>
    )
}
export default DisplayPage;
