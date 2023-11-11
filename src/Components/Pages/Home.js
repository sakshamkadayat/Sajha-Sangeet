import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Home.css';
import image1 from '../../Images/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-.jpg';
import image2 from '../../Images/school-boy-playing-synthesizer-at-home.jpg';
import image3 from '../../Images/music.jpg';
import About from "../../Images/dfdf.jpg";

const Home = () => {
    const images = [image1, image2, image3];

    return (<>
        <div className="slider-container">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                autoPlay={true}
                interval={1000}
            >
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Image ${index + 1}`} />
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
                <img src={About} alt='image' />
                <div className='about-content'>
                    <p style={{ fontSize: '1.4rem' }}>About us</p>
                    <h1>Learn The Music From The<br />Core & Become Mastery</h1>
                    <p>Welcome to Sajha Sangeet, where we delve into the essence of music, crafting mastery from the core. Passionate about diverse melodies, we celebrate the artistry that unites us all. Join us in a harmonious journey through the soulful world of Sajha Sangeet.</p>
                    <p><span style={{ marginRight: '12px' }} class="blue-checkmark">✓</span>Basic Knowledge</p>
                    <p><span style={{ marginRight: '12px' }} class="blue-checkmark">✓</span>Instruments</p>
                    <p><span style={{ marginRight: '12px' }} class="blue-checkmark">✓</span>Vocal Lession</p>
                    <p><span style={{ marginRight: '12px' }} class="blue-checkmark">✓</span>Industry Lession</p>
                    <button className='button-58'>Aboutus</button>
                </div>
            </div>
        </div>
        <div className='why-choose-us'>
            <div className='heading-section'>
            <p>Why Choose Us</p>
            <h1>We Give You The Best Facilities to Learning</h1>
            </div>
            <div className='why-div-wrapper'>
                <div className='div-1'>
                    <h3>test</h3>
                    <p>teststtstst</p>
                </div>
                <div className='div-2'>
                    <h3>test</h3>
                    <p>teststtstst</p>
                </div>
                <div className='div-3'>
                    <h3>test</h3>
                    <p>teststtstst</p>
                </div>
                <div className='div-4'>
                    <h3>test</h3>
                    <p>teststtstst</p>
                </div>

            </div>

        </div>
    </>
    );
};

export default Home;
