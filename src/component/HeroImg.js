import "./HeroImgStyles.css";
import React from 'react'
import Red from '../assets/red2.png'
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={Red} alt="My Pic" className="into-img" />
      </div>
      <div className="content" style={{zIndex:20}}>
        <h3>Hello, It's Me</h3>
        <h1>Harmanjot Kaur</h1>
        <h3>And I'm a <span>Frontend Developer</span></h3>
        <p>A Passionate Programmer And Problem Solver. Results-driven Front End Engineer with a proven track record of designing and developing intuitive and visually appealing user interfaces. Adept at analyzing user requirements, implementing best practices, and optimizing website performance to deliver exceptional user experiences.</p>
        <div className="buttons">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
