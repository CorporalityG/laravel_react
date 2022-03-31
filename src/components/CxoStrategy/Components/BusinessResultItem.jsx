import React from 'react'

export const BusinessResultItem = (props) => {
    return (
        <div className="col-md-3 cxo-bs-box-col">
            <div className="cxo-bs-box">
                <div className="bs-box-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                </div>
                <div className="bs-box-title">{props.title}</div>
            </div>
        </div>
    )
}
