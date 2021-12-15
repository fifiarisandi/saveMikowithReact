import React from "react";
import styled from "styled-components";
import logo from "../../logosaveMiko.png";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

                <Link smooth={true} to="home" className="navbar-brand" href="#"> 
                <img className="logo" src={logo} alt="logo" />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" className="nav-link" href="#">
                                Home <span className="sr-only"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="sponsor" className="nav-link" href="#">Sponsor a Dog</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="about" className="nav-link" href="#">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        </NavbarContainer>
    )
}

export default Navbar

//Main Navbar container
const NavbarContainer = styled.div`
    background: var(--ds-grey);
    .nav-link {
        color: #fff !important;
        &:hover {
            background: var(--ls-grey);
        }
    }
`;


