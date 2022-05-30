import React from 'react';
import "./GTMVectorComp.css";
import megaPhone from "./images/mega_phone.png";
import bulb from "./images/bulb.png";

const GTMVectorComp = () => {
    return (
        <div className="gtm-vector-comp">
            <div className="gtm-vector-comp-container">
                <img src={megaPhone} className="gtm-megaPhone" alt="megaPhone" />
                <img src={bulb} className="gtm-bulb" alt="bulb" />
            </div>
        </div>
    )
}

export default GTMVectorComp
