import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import "../../Components/Styles/Footer.css";

function Footer() {
     return (
        <>
            <div className="container-main-footer">
                {[
                    {
                        title: 'Contact Us',
                        items: [
                            { icon: faMapMarker, text: 'Attariya, Kailali' },
                            { icon: faEnvelope, text: 'sajhasewa977@gmail.com' },
                            { icon: faPhone, text: '+977 9865765411' },
                        ],
                    },
                    {
                        title: 'Quick Links',
                        items: [
                            'About Us',
                            'Service',
                            'Contact',
                        ],
                    },
                    {
                        title: 'Useful Links',
                        items: [
                            'Privacy Policy',
                            'Terms and Conditions',
                            'Support',
                        ],
                    },
                   
                ].map((section, index) => (
                    <div key={index} className="footer-section">
                        <h3>{section.title}</h3>
                        {section.items.map((item, itemIndex) => (
                            <p key={itemIndex}>
                                {section.title === 'Contact Us' ? (
                                    <>
                                        <FontAwesomeIcon icon={section.items[itemIndex].icon} />
                                        <strong >{section.items[itemIndex].text}</strong>
                                    </>
                                ) : (
                                    <a href="#">{item}</a>
                                )}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="copyright">
                &copy; 2023 Sajha Sangeet. All rights reserved
            </div>
        </>
        );
}

export default Footer
