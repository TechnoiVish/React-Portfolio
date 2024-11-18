import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import ServiceBox from './ServiceBox.jsx';
import Services_Data from '../../assets/services_data';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (serviceIndex) => {
        setSelectedService(serviceIndex);
    };

    const handleClose = () => {
        setSelectedService(null); // Corrected: Reset to null
    };

    return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="service_list">
                <ul>
                    {Services_Data.map((service, index) => (
                        <li key={index} onClick={() => handleServiceClick(index)}>
                            <div className="list_inner">
                                <div className="left">
                                    <span className="number">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="title">{service.title}</h3>
                                </div>
                                <div className="right">
                                    <div className="text">
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="arrow">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg replaced-svg">
                                            <path d="M20.843 4.21239C20.843 3.79817 20.5072 3.46238 20.093 3.46238L13.343 3.46234C12.9288 3.46233 12.593 3.79812 12.593 4.21233C12.593 4.62655 12.9288 4.96233 13.343 4.96234L19.343 4.96238L19.3429 10.9624C19.3429 11.3766 19.6787 11.7124 20.0929 11.7124C20.5072 11.7124 20.8429 11.3766 20.8429 10.9624L20.843 4.21239ZM4.43731 20.9285L20.6233 4.74271L19.5627 3.68205L3.37665 19.8678L4.43731 20.9285Z" fill="#12141D"></path>
                                        </svg>
                                    </div>
                                </div>
                                <a className="aman_my_full_link"></a>
                                <img className="popup_service_image" src="assets/img/service/1.jpg" alt="" />
                            </div>
                        </li>
                    ))}
                </ul>
                <span className="ccc"></span>
            </div>

            {selectedService !== null && (
        
                <ServiceBox className='overlay'
                    title={Services_Data[selectedService].title} 
                    description={Services_Data[selectedService].description} 
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Services;
