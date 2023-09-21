import "./NavbarStyles.css"
import React,{useState} from 'react'
import {Link,NavLink} from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
 
  return (
    <div className="header">
      <Link to="/"><h1>Portfolio</h1></Link>
      <ul className={click ? "nav-menu.active" : "nav-menu"}>
        <li>
            <NavLink to="/">About</NavLink>
        </li>
        <li>
            <NavLink to="/education">Education</NavLink>
        </li>
        <li>
            <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
            <NavLink to="/project">Project</NavLink>
        </li>
        <li>
            <NavLink to="/SocialIcons">Social</NavLink>
        </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {
          click ? 
            (<FaTimes size={20} style={{color:"#fff"}}/>) :
            <FaBars size={20} style={{color:"#fff"}}/>
        }
      </div>
    </div>
  )
}

export default Navbar
