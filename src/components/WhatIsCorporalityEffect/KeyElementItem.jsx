import React from 'react'

export const KeyElementItem = (props) => {
    return (
        <div className="col-lg-4 wice-ke-box-col">
            <div className="wice-ke-box">
                <div className="wice-ke-box-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                </div>
                <div className="wice-ke-box-title">{props.title}</div>
            </div>
        </div>
    )
}
