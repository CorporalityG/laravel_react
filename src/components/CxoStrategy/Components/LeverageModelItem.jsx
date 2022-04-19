import React from 'react'

export const LeverageModelItem = (props) => {
    return (
        <div className="col-lg-3 col-sm-6 cxo-lm-box-col">
            <div className="lm-box-item" data-aos="flip-up" data-aos-delay="700">
                {props.icon && <img src={props.icon} alt={props.title} />}
                <div className="lm-box-item-title">{props.title}</div>
            </div>
        </div>
    )
}