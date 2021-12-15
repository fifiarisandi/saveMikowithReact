import React from "react";
import miko from "../../images/Miko.png";


const Home = () => {
    return (
        <div id="home" className="container py-5">
            <div className="row">
                <div className="col-12 col-md-7">
                    <div className="mikophotoWrap mb-5">
                        <img className="Miko-img" src={miko} alt="SaveMiko!" />  
                    </div>
                </div>
                <div className="intro-text col-6 col-md-5">
                    <p className="lead"><strong>This is Miko...</strong></p>
                    <p>He's a rescued dog.</p>
                    <p>Lucky for him, he's found a loving family who loves him and gives him a home. Sadly, not many dogs are as lucky as him. 
                        Some end up living on the streets and are often abused by people. 
                        Some others spend their lives in poor conditions in animal shelters as many animal shelters struggle to fund their operational activities.</p>
                    <p>
                    On the other hand, there are many people out there who want to keep a dog, yet their life situation doesn't allow to do so. 
                    If this is you, you can still do something!
                    </p>
                    <p><em>
                    You can save a dog or two, even more!
                    </em></p>
                    <p>
                    You can keep a dog(s) without having to have them in your house by sponsoring them. We will take care of them for you! 
                    You will get a regular update on your dogs, their photos, health condition, what toys they like, and some pawprints for you! 
                    You can also plan a regular visit to play with them. We will send you financial reports regularly, so you know where your money goes.
                    </p>
                    <p><strong>
                    You can make a difference to the lives of these precious souls!
                    </strong></p>
                </div>
            </div>
            
        </div>
    )
}

export default Home
