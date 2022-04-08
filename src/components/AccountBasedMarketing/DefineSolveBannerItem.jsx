import React from 'react'
import { BASE_URL } from '../../config'

export const DefineSolveBannerItem = (props) => {
    return (
        <div className="abm-dsb-item" data-aos="fade-up" data-aos-delay="700">
            <div className="dsb-item-title">{props.title}</div>
            <div className="dsb-item-img">
                <img src={`${BASE_URL}/img/AccountBasedMarketing/line-arrow.png`} alt="->" />
            </div>
            <div className="dsb-item-subtitle">{props.subtitle}</div>
        </div>
    )
}