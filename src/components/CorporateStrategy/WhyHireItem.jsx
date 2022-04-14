import React from 'react'

export const WhyHireItem = (props) => {
    return (
        <div className="col-lg-3 col-md-6 cmo-wh-box-col">
            <div className="wh-box-item" data-aos="flip-up" data-aos-delay="700">
                {props.icon && <img src={props.icon} alt={props.title} />}
                <div className="wh-box-item-title">{props.title}</div>
            </div>
        </div>
    )
}