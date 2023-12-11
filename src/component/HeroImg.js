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
        <h3>And I'm a <span>Full Stack Developer</span></h3>
        <p>Versatile full-stack developer skilled in MERN (MongoDB, Express, React, Node) stack with expertise in Android app development using React Native. Eager to contribute technical skills and passion for creating engaging web and android applications in a collaborative team environment.Despite being early in my career, my passion for coding and commitment to staying at the forefront of technology make me a valuable asset for projects seeking fresh perspectives and innovative solutions.</p>
        <div className="buttons">
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg
