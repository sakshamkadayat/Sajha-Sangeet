import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Home.css';
import image1 from '../../Images/c2.jpeg';
import image2 from '../../Images/c1.jpeg';
import image3 from '../../Images/music.jpg';
import About from "../../Images/about.jpg";
import Class from './Class';
import CoursesList from './CoursesList';

const Home = () => {
    const images = [image1, image2, image3];

    return (
        <>
            <div className="slider-container">
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    autoPlay={true}
                    interval={2000}
                    infiniteLoop= {true}
                >
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={image} alt="sliders" />
                            <div className='over-lay'>
                                <h1>Learn The Music <br /> From The <span style={{ color: "#FF7703" }}>Masters</span></h1>
                                <p>Unlock the Masters' Melodies: Your Musical Journey Starts Here</p>
                                <button className='button-58'>Learn More</button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='Aboutus-main-container'>
                <div className='about-wapper'>
                    <img src={About} alt='aboutus' />
                    <div className='about-content'>
                        <p style={{ fontSize: '1.4rem' }}>About us</p>
                        <h1>Learn The Music From The<br />Core & Become Mastery</h1>
                        <p>Welcome to Sajha Sangeet, where we delve into the essence of music, crafting mastery from the core. Passionate about diverse melodies, we celebrate the artistry that unites us all. Join us in a harmonious journey through the soulful world of Sajha Sangeet.</p>
                        <p><span style={{ marginRight: '12px' }} className="blue-checkmark">✓</span>Basic Knowledge</p>
                        <p><span style={{ marginRight: '12px' }} className="blue-checkmark">✓</span>Instruments</p>
                        <p><span style={{ marginRight: '12px' }} className="blue-checkmark">✓</span>Vocal Lesson</p>
                        <p><span style={{ marginRight: '12px' }} className="blue-checkmark">✓</span>Industry Lesson</p>
                        <button className='button-58'>About us</button>
                    </div>
                </div>
            </div>
            <Class />
            <CoursesList/>

            <div className="google-maps-iframe">
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d337.72380383568816!2d80.55356252834318!3d28.810787044867695!2m3!1f270!2f39.10172897527929!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1sen!2snp!4v1700668899889!5m2!1sen!2snp"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    );
};

export default Home;
