import React from 'react'

export const ProcessItem = (props) => {
    return (
        <div className="col-lg-4 cc-process-box-col">
            <div className="p-box">
                <div className="p-box-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                </div>
                <div className="p-box-title">{props.title}</div>
                <div className="p-box-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}