import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Home.css';
import image1 from '../../Images/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-.jpg';
import image2 from '../../Images/school-boy-playing-synthesizer-at-home.jpg';
import image3 from '../../Images/music.jpg';

const Home = () => {
    const images = [image1, image2, image3];

    return (
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
                            <h1>Learn The Music <br/> From The <span style={{ color: "#FF7703" }}>Masters</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className='button-58'>Learn More</button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Home;
