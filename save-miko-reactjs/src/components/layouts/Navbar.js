import React from "react";
import styled from "styled-components";
import logo from "../../logosaveMiko.png";

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">

                <a className="navbar-brand" href="#"> 
                <img className="logo" src={logo} alt="logo" />
                </a>
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
                            <a className="nav-link" href="#">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sponsor a Dog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
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


