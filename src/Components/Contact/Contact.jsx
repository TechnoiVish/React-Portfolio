import React,{useState,useEffect} from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const [result, setResult] = React.useState("");
 
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "cf36d0b6-46a8-43af-b13f-fda88d622520");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>For General Queries Contact Me  </h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take new projects, so feel free to react me. </p>
                <div className="contact-details">
                    <div className="contact-detail">

                        <img src={mail_icon} alt="" />
                        <p>vishaman7890@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>(+91)-831-8819-623</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>SS-152 Sector-E L.D.A Colony Lucknow</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name"id="" 
                />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder="Enter Your Email"id=""
                />
                <textarea  name="message" rows="8" placeholder='Enter Your Message' 
                />
                <button  className='contact-submit' type='submit'>Submit</button>

            </form>
        </div>
        <span>{result}</span>
    </div>
  )
}

export default Contact