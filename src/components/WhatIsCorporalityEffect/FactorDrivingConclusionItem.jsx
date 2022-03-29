import React from 'react'

export const FactorDrivingConclusionItem = (props) => {
  return (
    <div className="col-lg-6 wice-factor-box-col">
        <div className="wice-factor-box">
            <div className="factor-box-title">{props.title}</div>
            <div className="factor-box-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    </div>
  )
}