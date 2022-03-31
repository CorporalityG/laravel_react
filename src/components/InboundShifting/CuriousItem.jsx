import React from 'react'

export const CuriousItem = (props) => {
    return (
        <div className="col-md-4 is-curious-box-col">
            <div className="is-curious-box">
                <div className="c-box-title">{props.title}</div>
                <div className="c-box-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
            </div>
        </div>
    )
}