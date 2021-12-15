import React from "react";
import team from "../../teamwork.png"

const AboutUs = () => {
    return (
        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="photoWrap mb-5">
                        <img className="team-img" src={team} alt="the team.."/>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="textWrap">
                    <h2>About Us</h2>
                    <p>
                    SaveMiko! was founded in Tallinn, Estonia by a group of animal lovers, who are passionate about helping unfortunate dogs. 
                    All members are actively involved in "Adopt, don't shop!" campaign in Estonia. The office and shelter is located in the Mustamae area.
                    </p>
                    <p>
                        Every month, the team gathers to enjoy quality time together and have discussions on future plans. 
                        Each member usually brings their pets, so the pets can also play together during the gathering.
                    </p>
                    <p>
                    The name "SaveMiko!" is inspired by a dog who was neglected by his owners for years, before he was finally rescued.
                    </p>
                    <p>The SaveMiko! team welcomes new volunteers who are also passionate about helping dogs and willing to commit 
                        minimum 5 hours per week to help in the shelter. Contact us for more info!
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs
