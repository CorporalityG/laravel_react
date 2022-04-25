import React from 'react'

export const KeyElementItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 wce-key-elements-box-col">
        <div className="wce-key-elements-box">
            <div className="wce-keb-title">{props.title}</div>
            <div className="wce-keb-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    </div>
  )
}