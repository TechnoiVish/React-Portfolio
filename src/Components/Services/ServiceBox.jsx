import React from 'react'
import './ServiceBox.css' 
import travelPic from "../../assets/travel.png"
const ServiceBox = ({ title, description,onClose }) => {


    return (
        <div className="orido_tm_modalbox opened">
            <div className="box_inner">
                <div className="close"  onClick={onClose}>
                    <i className="icon-cancel"></i>
                </div>
                <div className="description_wrap">
                    <div className="service_popup_informations">
                        <div className="image">
                            <img src={travelPic} />
                            <div className="main" >
                            </div>
                        </div>
                        <div className="main_title"><h3>{title}</h3>
                        </div>
                        <div className="descriptions">
                     
                            
<p>{description}</p>
                        
                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceBox