import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import my_pic from '../../assets/my-pic.png'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />

        </div>
        <div className="about-sections">
            {/* <div className="about-left">
                <img src={my_pic} alt="" className='profile'/>
            </div> */}
            <div className="about-right">
               <div className="about-para">
                <p>I am a Frontend Developer engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something.</p>
                <p>I love to work in groups where everyone can voice their opinions and ideas.</p>
               </div>
               <div className="about-skills">
               <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
               <div className="about-skill"> <p>JavaScript</p><hr style={{width:"70%"}}/></div>
               <div className="about-skill"> <p>React JS</p><hr style={{width:"60%"}}/></div>              
               <div className="about-skill"> <p>Express JS</p><hr style={{width:"45%"}}/></div>
               <div className="about-skill"> <p>Mongo DB</p><hr style={{width:"45%"}}/></div>              
              
               </div>
            </div>
            <div className="about-achievements">
            <div className="about-achievement">
<h1>0.5+</h1>
<p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
<h1>15+</h1>
<p>PROJECTS COMPLETED</p>
            </div>
<hr />
<div className="about-achievement">
<h1>10+</h1>
<p>HAPPY CLIENTS</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About