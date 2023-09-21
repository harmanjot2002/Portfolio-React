import "./ContactStyles.css";
import React from 'react';
import {Link} from "react-router-dom"
// import Tick from '../assets/tick.png'

let popup=document.getElementById("popup");
function openPopup(){
            let vl1 = document.getElementById("name").value;
            if(vl1 === ""){
                return;
            }
            let vl2 = document.getElementById("add").value;
            // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(vl2 === ""){
                return;
            }
            let vl3 = document.getElementById("num").value;
            if(vl3 === ""){
                return;
            }
            let vl4 = document.getElementById("sub").value;
            if(vl4 === ""){
                return;
            }
            let vl5 = document.getElementById("txt").value;
            if(vl5 === ""){
                return;
            }
            popup.classList.add("open-popup");
}
function closePopup(){
            popup.classList.remove("open-popup");
}
const ContactForm = () => {
  return (
    <>
      <section className="contact" id="contact" style={{zIndex:20}}>
        <h2 className="heading">Contact <span>Me</span></h2>
        <form style={{zIndex:30}}>
            <div className="input-box">
                <input id="name" type="text" placeholder="Full Name" required/>
                <input id="add" type="email" placeholder="Email Address" required/>
            </div>
            <div className="input-box">
                <input id="num" type="number" placeholder="Mobile Number" required/>
                <input id ="sub" type="text" placeholder="Email Subject" required/>
            </div>
            <textarea name="" id="txt" cols="30" rows="10" placeholder="Your Message" required></textarea>
            <Link to="/contact"><button type="submit" className="btn" onClick={openPopup}>Send Message</button></Link>
            
            {/* <div className="popup" id="popup">
                <img src={Tick} alt="yellow tick"/>
                <h2>Thank You!</h2>
                <p>Your details have been submitted successfully.Thanks!</p>
                <button type="submit" className="btn" onClick={closePopup}>OK</button>
            </div> */}
        </form>
    </section>
    </>
    
  )
}

export default ContactForm
