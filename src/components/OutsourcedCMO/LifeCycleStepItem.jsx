import React from 'react'

export const LifeCycleStepItem = (props) => {
    return (
        <div className={`cmo-lc-step cmo-lc-step-${props.step}`}>
            <div className="lc-step-content" data-aos="fade-up" data-aos-delay="300">
                <div className="lc-step-title">{props.title}</div>
                <div className="lc-step-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}