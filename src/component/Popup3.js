import "./PopupStyles.css";
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import H4 from "../assets/H4.mp4" 

const Popup3 = () => {
  return (
    <>
        <Navbar/>
        <div>
            <h2 className="heading">Project <span>Demo</span></h2>
            <div id="popup3">
                <video src={H4} muted autoplay controls></video>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Popup3
