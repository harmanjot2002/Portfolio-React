import "./ProjectStyles.css";
import React from 'react';

import Task from '../assets/task.png';
import Music from '../assets/music.png';
import Food from '../assets/food.png';

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
                <img src={Music} alt="Music Player"/>
                <div className="portfolio-layer">
                    <h4>Music Player</h4>
                    <p>Music Player Website Clone created using HTML and CSS.This is a complete music player with playlist options.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/Music-Player" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="https://music-player-beryl-seven.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
                    </div>
                    
                </div>
            </div>
            <div className="portfolio-box">
                <img src={Food} alt="Food Website"/>
                <div className="portfolio-layer">
                    <h4>Food Delivery Service</h4>
                    <p>The website includes a gallery that features delicious food shots. This layoutis arranged in a grid that's easy to pull off with CSS grid in React JS.</p>
                    <div className="connects">
                        <Link className="redirect" to="https://github.com/harmanjot2002/HarmanFoodies" target="_blank"><FaGithub size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link className="redirect" to="https://harman-foodies.vercel.app/" target="_blank"><BiLinkExternal size={30} style={{color:"var(--bg-color"}}/></Link>
                        <Link to="/popup" target="_blank"><FaVideo size={30} style={{color:"var(--bg-color"}}/></Link>
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
