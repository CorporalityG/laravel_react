import React from 'react'

export const CommitmentItem = (props) => {
    return (
        <div className="col-md-4">
            <div className="wce-commitment-box">
                <div className="wce-box-tittle">{props.title}</div>
                <div className="wce-box-content" dangerouslySetInnerHTML={{ __html: props.subtitle }}></div>
            </div>
        </div>
    )
}