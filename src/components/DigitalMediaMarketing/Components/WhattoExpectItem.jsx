import React from 'react'

export const WhattoExpectItem = (props) => {
    return (
        <div className="dmm-e-item" data-aos="fade-up" data-aos-delay="300">
            <div className="e-item-img">
                {props.icon && <img src={props.icon} alt={props.title} />}
            </div>
            <div className="e-item-content">
                <div className="e-item-title">{props.title}</div>
                <div className="e-item-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}