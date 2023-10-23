import "./ContactStyles.css";
import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
const openPopup = () =>{
    alert("Submitted successfully");
}


const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_bhbrx97', 'template_8iygjge', form.current, 'NRDJ1PoPQXmwHx3LB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        number: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        number: '',
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
        

        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            console.log('Form Data:', formData);
            openPopup();
            sendEmail();
            
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
        <form onSubmit={handleSubmit} ref={form}>
            <div className="input-box">
                <input type="text" name="username" placeholder="Full Name" value={formData.username} onChange={handleChange} required/>
                {errors.username && <span className='error'>{errors.username}</span>}

                <input name='email' type="email" placeholder="Email Address" autoComplete="none" value={formData.email} onChange={handleChange} required/>
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div className="input-box">
                <input name='number' type="number" placeholder="Mobile Number" autoComplete="none"  value={formData.number} onChange={handleChange} required/>
                {errors.number && <span className='error'>{errors.number}</span>}
                <input id ="sub" type="text" placeholder="Email Subject" autoComplete="none" name="emailSubject" required/>
            </div>
            <textarea name="message" id="txt" cols="30" rows="10" placeholder="Your Message" autoComplete="none" required></textarea>
            <button type="submit" className="btn">Send Message</button>
            
        </form>
    </section>
    </>
    
  )
}

export default ContactForm
