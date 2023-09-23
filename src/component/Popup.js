import "./PopupStyles.css";
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Task from "../assets/Task Manager.mp4" 

const Popup = () => {
  return (
    <>
        <Navbar/>
        <div>
            <h2 className="heading">Project <span>Demo</span></h2>
            <div id="popup">
                <video src={Task} muted autoplay controls></video>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Popup
