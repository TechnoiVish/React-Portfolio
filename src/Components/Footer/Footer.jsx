import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import up_arrow from '../../assets/up-arrow.png'
import welcome from '../../assets/A-1.png'
import welcome_2 from '../../assets/A-name.png'
import user_icon from '../../assets/user_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_pic from '../../assets/profile_pic.png'
const Footer = () => {
    const [subs, setSubs] = useState("");
    const [email, setEmail] = useState("");
    const onSubs = async (event) => {
        event.preventDefault();
        setSubs("Subscribed Thank You! ");
        setTimeout(() => {
            setSubs("");
        }, 3000)
        setEmail("");
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className='footer'>
            <div class="infobox "><div class="profile_button"><a class="image-container">
            <img className="base-image" src={welcome} alt="Overlay" /><img className="anim_circle" src={welcome_2} alt="Background" /></a></div><div><h3>Let's work together</h3><p>You can express yourself however you want and whenever you want, for free. You can customize a template or make your own.</p></div></div>
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src={profile_pic} alt="" height={250} /> */}
                    <p>I'm frontend developer with 8 Months+ of experience.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email " value={email} onChange={handleEmailChange} placeholder='Enter Your Email' />
                    </div>
                    <button onClick={onSubs} type='submit' disabled={!email} className="footer-subscribe">Subscribe</button> <span>{subs}</span>

                </div>

            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Aman Vishwakarma</p>
                <AnchorLink className='up-arrow' href='#top'>Say Hello <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" id="null" class="svg replaced-svg">
                    <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="white"></path>
                    <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="white"></path>
                </svg> </AnchorLink>
                <div className="footer-bottom-right">
                    <li><AnchorLink className='achor-link' offset={50} href='#about'>  About Me   </AnchorLink></li>
                    <li><AnchorLink className='achor-link' offset={50} href='#services'>  Services   </AnchorLink></li>
                    <li><AnchorLink className='achor-link' offset={50} href='#work'>   Portfolio  </AnchorLink></li>
                </div>
            </div>
            {/* <AnchorLink className='up-arrow' href='#top'> <img src={up_arrow} height={80}  width={80} alt=""  /> </AnchorLink> */}

        </div>
    )
}

export default Footer