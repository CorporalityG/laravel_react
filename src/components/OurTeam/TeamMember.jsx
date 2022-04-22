import React from 'react'

export const TeamMember = (props) => {
    return (
        <div className="ot-tm-member" data-aos="flip-up">
            <div className="tm-avtar-main">
                {props.avtar && <img src={props.avtar} alt={props.name} className="tm-avtar" />}
            </div>
            <div className="tm-content">
                <div className="tm-name">{props.name}</div>
                <div className="tm-designation">{props.designation}</div>
            </div>
        </div>
    )
}