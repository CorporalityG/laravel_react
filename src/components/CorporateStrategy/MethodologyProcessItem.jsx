import React from 'react'

export const MethodologyProcessItem = (props) => {
    return (
        <div className="coo-mp-item" data-aos="flip-left" data-aos-duration="2500" data-aos-delay="500">
            {props.icon && <img src={props.icon} alt={props.title} />}
            <div className="mp-item-title">{props.title}</div>
        </div>
    )
}