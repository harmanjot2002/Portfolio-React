import "./PopupStyles.css";
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import GreenCertify from "../assets/GreenCertify.mp4"

const Popup4 = () => {
  return (
    <>
        <Navbar/>
        <div>
            <h2 className="heading">Project <span>Demo</span></h2>
            <div id="popup3">
                <video src={GreenCertify} muted autoplay controls></video>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Popup4
