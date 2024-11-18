import React from 'react'
import './Hero.css'
import my_pic from '../../assets/my-pic.png'
import resume from '../../assets/My-Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = "/src/assets/My-Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "My-Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div id='home' className='hero'>
        <img src={my_pic} alt="" />
        <h1><span>I'm Aman Vishwakarma,</span> frontend developer based in India.</h1>
        <p>I am frontend developer from india, IND with 2 years</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='achor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className="hero-resume" onClick={onButtonClick}>Download Resume</div>
        </div>
    </div>
  )
}

export default Hero