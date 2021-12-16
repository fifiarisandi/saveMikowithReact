import React, {useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import img2 from "../../images/svg2.png";



const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <>
        <div id='signup' className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src={img2} alt="Join us..." className="form-img" width="100%"/>
            </div>
            {!isSubmitted ? (<FormSignup submitForm=
            {submitForm} />) : 
            (<FormSuccess />)}
        </div>
        </>
    );
}

export default Form;
