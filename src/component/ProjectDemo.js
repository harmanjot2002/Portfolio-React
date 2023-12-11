import "./ProjectStyles.css";
import React from 'react';

import Task from '../assets/task.png';
import Schools from '../assets/H4Schools.png';
import FMS from '../assets/FMS.png';
import Book from '../assets/book.png'
import Certify from '../assets/Certify.png'

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
                    <p>"Content Management System" allows users to access an extensive library of tutorials, examples, and resources for HTML, CSS, JavaScript, and more. It empowers developers and learners to easily explore a user-friendly interface with advanced filtering capabilities, and responsive design in this CMS project.</p>
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
                    <p>"Faculty Management System" is a web-based application designed to streamline faculty-related tasks. Users can effortlessly manage faculty information, assign lectures and groups, provide ratings or reviews and handle administrative functions.Admin can efficiently manage lectures and view them weekly,monthly and yearly.</p>
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
                    <p>Web-based "Task Manager Application" where users can perform CRUD operations. The app will allow users to organize their tasks, set due dates, mark tasks as completed, categorize tasks and perform searching(using text and audio both) and filtering based on category. It also includes a calendar view to help users visualize due dates.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/Task-Manager" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="https://task-manager-phi-red.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="portfolio-container" style={{zIndex:20}}>
            <div className="portfolio-box">
                <img src={Book} alt="HD 1.0"/>
                <div className="portfolio-layer">
                    <h4>HD 1.0-Library Management System</h4>
                    <p>This Java-based Library Management System facilitates complete CRUD operations for managing authors and books. It leverages AWT, Swing for a user-friendly interface and MySQL for robust data storage.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/Library-Management-System" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup3" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                    
                </div>
            </div>
            <div className="portfolio-box">
                <img src={Certify} alt="GreenCertify"/>
                <div className="portfolio-layer">
                    <h4>GreenCertify</h4>
                    <p>GreenCertify is a web application built using Node.js, Express, MongoDB, EJS, ExcelJS, Nodemailer, and HTML-PDF which takes Excel file as input containing information about users who have donated money for tree plantation.It processes data, generates personalized certificates in PDF format and sends them to users via email.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/GreenCertify/" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup4" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    </div>
  )
}

export default ProjectDemo
