import React from 'react'

export const MarketingGoalsItem = (props) => {
    return (
        <div className="col-md-6 dmm-gc-box-col">
            <div className="gc-box">
                <div className="gc-box-title">{props.title}</div>
                <div className="gc-box-subtitle">{props.subtitle}</div>
            </div>
        </div>
    )
}