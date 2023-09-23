import "./ContactStyles.css";
import React,{useState} from 'react';
// import {Link} from "react-router-dom"
import Tick from '../assets/tick.png'

// let popup=document.getElementsByClassName("popup");
const openPopup = () =>{
    alert("Submitted successfully");
    // popup.classList.add("open-popup");
}
// const closePopup = () =>{
//  popup.classList.remove("open-popup");
// }

const ContactForm = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
        // password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        number: '',
        // password: '',
    });
    
    const validateForm = () => {
        let valid = true;

        if(!formData.username.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: 'Username is required',
            }))
            valid = false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: '',
            }));
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!formData.email.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Email is required'
            }));
            valid = false;
        } else if (!emailRegex.test(formData.email)) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
            }));
            valid =  false;
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: '',
            }))
        }

        const mobileRegex = /^[0]?[6789]\d{9}$/;
        if(!formData.number.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                number: 'Mobile Number is required'
            }));
            valid = false;
         } else if (!mobileRegex.test(formData.number)) {
            console.log(!mobileRegex.test(formData.number));
            setErrors((prevErrors) => ({
                ...prevErrors,
                number: 'Number must be 10 characters long',
            }));
            valid = false;
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    number: '',
                }))
            }
        

        // const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        // if(!formData.password.trim()) {
        //     setErrors((prevErrors) => ({
        //         ...prevErrors,
        //         password: 'Password is required'
        //     }));
        //     valid = false;
        // } else if (!passwordRegex.test(formData.password)) {
        //     console.log(!passwordRegex.test(formData.password));
        //     setErrors((prevErrors) => ({
        //         ...prevErrors,
        //         password: 'Password must be at least 8 characters long and contain at least one letter and one number',
        //     }));
        //     valid =  false;
        // } else {
        //     setErrors((prevErrors) => ({
        //         ...prevErrors,
        //         password: '',
        //     }))
        // }
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            console.log('Form Data:', formData);
            openPopup();
            // setClassState('open-popup');
        } else {
            console.log('Form validation failed');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }
  return (
    <>
      <section className="contact" id="contact" style={{zIndex:20}}>
        <h2 className="heading">Contact <span>Me</span></h2>
        <form onSubmit={handleSubmit}>
            <div className="input-box">
                <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required/>
                {errors.username && <span className='error'>{errors.username}</span>}

                <input name='email' type="email" placeholder="Email Address" autoComplete="none" value={formData.email} onChange={handleChange} required/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div className="input-box">
                <input name='number' type="number" placeholder="Mobile Number" autoComplete="none"  value={formData.number} onChange={handleChange} required/>
                {errors.number && <span className='error'>{errors.number}</span>}
                <input id ="sub" type="text" placeholder="Email Subject" autoComplete="none" required/>
            </div>
            <textarea name="" id="txt" cols="30" rows="10" placeholder="Your Message" autoComplete="none" required></textarea>
            <button type="submit" className="btn">Send Message</button>
            
            <div className='popup' id="popup">
                <img src={Tick} alt="yellow tick"/>
                <h2>Thank You!</h2>
                <p>Your details have been submitted successfully.Thanks!</p>
                {/* <button type="submit" className="btn" onClick={closePopup}>OK</button> */}
            </div> 
        </form>
    </section>
    </>
    
  )
}

export default ContactForm
