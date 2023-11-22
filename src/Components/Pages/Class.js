import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGuitar, faDrum, faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons';
import CardList from './CardList';

function Class() {
    const cards = [
        { title: 'Guitar', icon: faGuitar, className: 'ClassA', Detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
        { title: 'Vocal', icon: faMicrophone, className: 'ClassB', Detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
        { title: 'Drum', icon: faDrum, className: 'ClassC', Detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
        { title: 'Keyword', icon: faMusic, className: 'ClassD', Detail: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.' },
    ];

    return (
        <>
            <div className='our-class-main-container'>
                <div className='class-heading'>
                    <p>Our Class</p>
                    <h1 style={{ margin: '12px' }}>Our Music Class</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>
                <div className='class-card'>
                    {cards.map((card, index) => (
                        <div key={index} className={card.className}>
                            <FontAwesomeIcon
                                icon={card.icon}
                                style={{ marginRight: '8px', marginBottom: '15px', fontSize: '40px', color: '#FF7703' }}
                            />
                            <h3>{card.title}</h3>
                            <p style={{ width: '200px' }}>{card.Detail}</p>
                        </div>
                    ))}
                </div>
            </div>

           <CardList/>
        </>
    );
}

export default Class;
