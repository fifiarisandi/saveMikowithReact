import React from "react";
import team from "../../teamwork.png"

const AboutUs = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="photoWrap mb-5">
                        <img className="team-img" src={team} alt="the team.."/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                    SaveMiko! was founded in Tallinn, Estonia by a group of animal lovers, who are excited about helping unfortunate dogs. 
                    The name is inspired by Miko, a dog who was neglected by his owners for years, before he was finally rescued.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs
