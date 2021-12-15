import React from "react";
import lucky from "../../images/saveLucky.png";
import dora from "../../images/SaveDorabig.png";
import max from "../../images/SaveMaxbig.png";
//search icon on dogs images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//popup box
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import { Link } from "react-scroll";


const DogsDatabase = () => {
    
    return (
        <div id="sponsor" className="database-wrapper">
            <div className="container">
                <h2 className="text-center py-5">Sponsor a Dog</h2>
                <div className="image-box-wrapper d-flex justify-content-center">
                    <div className="dog-img-box">
                        <img className="dog-img" src={lucky} alt="Hi, I'm Lucky.." />
                        <p className="dog-text">I have such a fun time playing scent games with my carers and sniffing around the fields to see what I can find. 
                        I love a good splash about in the local river too! </p>

                        <p className="dog-text"> I can be very protective over my things and can get very anxious around people I don't know. 
                        However, I'm super lucky that my carers here understand me, know all my quirks and are helping me build my confidence around people.
                        </p>
                        <Link smooth={true} to="signup" className="nav-link" href="#">
                            <button type="button" className="sponsor-btn"> Sponsor me! </button>
                        </Link>
                    </div>
                {/* - */}
                    <div className="dog-img-box">
                        <img className="dog-img" src={dora} alt="Hi, I'm Dora.." />
                        <p className="dog-text">
                        I’m a very clever pooch and I’m always learning news tricks! 
                        I especially love clicker training - I must be really good at it because I get loads of treats! </p>

                        <p className="dog-text"> I came here because I started to get really nervous around people I don't know and my owners weren’t able to look after me anymore. 
                            It can take me a while to trust someone new and I sometimes get wary around other dogs too when they want to share my food.
                        </p>
                        <Link smooth={true} to="signup" className="nav-link" href="#">
                            <button type="button" className="sponsor-btn"> Sponsor me! </button>
                        </Link>
                    </div>
                {/* - */}
                    <div className="dog-img-box"> 
                        <img className="dog-img" src={max} alt="Hi, I'm Max.." />
                        <p className="dog-text">
                        I’m a happy boy you can always find me wagging my tail with a huge smile on my face. 
                        I’ve also got a big appetite, and I’m a fan of long walks in the grass and the odd game of fetch... with my orange water bottle of course! </p>

                        <p className="dog-text">I was a stray before I came here. 
                        I get really anxious and wary around new people and dogs so finding a home that suits me is tricky.
                        I love being here, everyone is nice to me. But, I hope I will get my forever family one day.
                        </p>
                        <Link smooth={true} to="signup" className="nav-link" href="#">
                            <button type="button" className="sponsor-btn"> Sponsor me! </button>
                        </Link>
                        {/*  */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DogsDatabase
