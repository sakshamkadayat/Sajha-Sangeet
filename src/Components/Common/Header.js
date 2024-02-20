import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Images/Sajhabg.png";
import "../Styles/Header.css";
import { Link } from "react-router-dom";


function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <img src={Logo} alt="logo" />
            <nav ref={navRef} >
                <Link to='/home' >Home</Link>
                <Link to="/aboutus" >About Us</Link>
                <Link to="/Gallery" >Gallery</Link>
                <Link to="/contact" >Contact Us</Link>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Header
