import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMusic, faChalkboardTeacher, faMicrophone  } from '@fortawesome/free-solid-svg-icons';

function Class() {
    const cards = [
        { title: 'Free Equipment', icon: faMicrophone  },
        { title: 'High Tech', icon: faLaptopCode },
        { title: 'Music Studio', icon: faMusic },
        { title: 'Expert Teacher', icon: faChalkboardTeacher },
    ];
    return (
        <>
            <div className='our-class-main-container'>
                <div className='class-heading'>
                    <p>Our Class</p>
                    <h1>Our Music Class</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div className='class-card'>
                    {cards.map((card, index) => (
                        <div key={index} className="cards">
                            <FontAwesomeIcon icon={card.icon} style={{ marginRight: '8px', marginBottom: '15px', fontSize: '40px', color: '#FF7703' }} />
                            <h3>{card.title}</h3>
                        </div>
                    ))}
                </div>

            </div>


        </>
    )
}

export default Class
