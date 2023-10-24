import "./ProjectStyles.css";
import React from 'react';

import Task from '../assets/task.png';
import Schools from '../assets/H4Schools.png';
import FMS from '../assets/FMS.png';

import {Link} from 'react-router-dom';
import {FaGithub,FaVideo} from "react-icons/fa";
import {BiLinkExternal} from "react-icons/bi";

const ProjectDemo = () => {
  return (
    <div>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Projects</span></h2>
        <div className="portfolio-container" style={{zIndex:20}}>
            <div className="portfolio-box">
                <img src={Schools} alt="H4 Schools"/>
                <div className="portfolio-layer">
                    <h4>H4 Schools</h4>
                    <p>"Content Management System" allows users to access an extensive library of tutorials, examples, and resources for HTML,CSS,JS and more.It empowers developers and learners to explore user-friendly interface, advanced filtering capabilities and responsive design in this CMS project.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/H4-Schools" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="https://h4-schools-6m61-7kba5ukvq-harmanjot2002.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup3" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                    
                </div>
            </div>
            <div className="portfolio-box">
                <img src={FMS} alt="EduCrafter"/>
                <div className="portfolio-layer">
                    <h4>EduCrafter</h4>
                    <p>"Faculty Management System" is a web-based application designed to streamline faculty-related tasks. Users can effortlessly manage faculty information, assign lectures and groups,provide ratings or reviews and  view them weekly,monthly and yearly.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/EduCrafter" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link className="redirect" to="https://dashboard-harmanjot2002.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup2" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={Task} alt="Task Manager"/>
                <div className="portfolio-layer">
                    <h4>Task Manager</h4>
                    <p>Task Manager Application using HTML,CSS and JavaScript where users can perform CRUD operations, set due dates,categorize and includes a calender view of tasks.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/Task-Manager" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="https://task-manager-phi-red.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default ProjectDemo
