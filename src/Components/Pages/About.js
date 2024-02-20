import "../Styles/About.css";
import Instructor from "../../Images/instructor.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = () => {
  return (
    <>
      <div className="container-aboutus" id="about">
        <div className="container-aboutus-left">
          <h2 className="title_font textcolor_secondary">
            About{" "}
            <span className="title_font textcolor_primary">
              Welcome to Sajha Sangeet - Your Musical Hub!
            </span>
          </h2>
          <p>
            Sajha Sangeet is your one-stop destination for all things music. As
            both a music shop and institute, we offer a diverse range of
            instruments, sheet music, and accessories, alongside personalized
            lessons and workshops taught by experienced professionals. Join us
            in celebrating the joy of music and let's create beautiful melodies
            together at Sajha Sangeet!
          </p>
        </div>
        <div className="container-aboutus-right">
          <LazyLoadImage src={Instructor} alt="Doctor1" />
        </div>
      </div>
    </>
  );
};
export default About;
