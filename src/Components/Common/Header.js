import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../Images/Sajhabg.png";
import "../Styles/Header.css";

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    return (
        <header>
            <img src={Logo} alt="logo" />
            <nav ref={navRef} >
                <a href='/home' >Home</a>
                <a href="/ourservice" >About Us</a>
                <a href="/whatwedo" >Lessons</a>
                <a href="/aboutus" >Contact Us</a>
                <a href="/contact"  >Blog</a>
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
