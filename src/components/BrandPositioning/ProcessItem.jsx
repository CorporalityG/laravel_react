import React from 'react'

export const ProcessItem = (props) => {
    return (
        <div className="col-lg-2 bp-p-box-col">
            <div className="bp-p-box" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay="500">
                <div className="p-box-number-main">
                    <div className="p-box-number">{props.number}</div>
                </div>
                <div className="p-box-bg">
                    <div className="p-box-hexagon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4"><path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z"></path></svg>
                    </div>

                    <div className="p-box-content">
                        <div className="p-box-title">{props.title}</div>
                    </div>
                </div>
                <div className="p-box-subtitle">{props.subtitle}</div>
            </div>
        </div>
    )
}