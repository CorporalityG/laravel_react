import React from 'react'

export const ApproachItem = (props) => {
    return (
        <div className={`col-lg-2 col-sm-6 gtm-a-col gtm-a-col-${props.number}`}>
            <div className={`gtm-a-item gtm-a-item-${props.number}`}>
                <div className="a-item-number-main" data-aos="zoom-in-up">
                    <div className="a-item-number-inner">
                        <div className="a-item-number">{props.number}</div>
                    </div>
                </div>
                <div className="a-item-content"  data-aos="zoom-in">
                    <div className="a-item-title">{props.title}</div>
                    <div className="a-item-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                </div>
            </div>
        </div>
    )
}