import React from 'react'
import { BASE_URL } from '../../config'

export const TestimonialItem = (props) => {
    return (
        <div className="career-testimonial-box">
            <div className="row career-testimonial-box-row">
                <div className="col-lg-4">
                    <div className="t-box-img-main">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} className="t-box-img" />}

                        <img src={`${BASE_URL}/img/Careers/${props.type}-rec-1.png`} alt="Rec 1" className="rec-1" />
                        <img src={`${BASE_URL}/img/Careers/${props.type}-rec-2.png`} alt="Rec 2" className="rec-2" />
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="t-box-content">
                        <img src={`${BASE_URL}/img/Careers/quote-top.png`} alt='quote' className="quote-top" />

                        <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
                        <div className="t-box-name">{`${props.name} , ${props.designation}`}</div>

                        <img src={`${BASE_URL}/img/Careers/quote-bottom.png`} alt='quote' className="quote-bottom" />
                    </div>
                </div>
            </div>
        </div>
    )
}