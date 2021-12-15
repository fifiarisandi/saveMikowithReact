import React from 'react'
import img3 from "../../images/svg3.png";


const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">
                We'll get back to you soon!
            </div>
            <img src={img3} alt='Success...' className='form-img-2'/>
        </div>
    )
}

export default FormSuccess
