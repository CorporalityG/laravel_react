import React from 'react'

export const TestimonialItem = (props) => {
    return (
        <div className="career-testimonial-box">
            <div className="row">
                <div className="col-lg-4">
                    <div className="t-box-img">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="t-box-content">
                        <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
                        <div className="t-box-name">{props.name} , {props.designation}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}