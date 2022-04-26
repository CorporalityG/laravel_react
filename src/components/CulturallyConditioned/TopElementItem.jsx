import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export const TopElementItem = (props) => {
    return (
        <div className="cc-te-box">
            <OverlayTrigger
                key={props.id}
                placement={'top'}
                trigger={['hover', 'click']}
                overlay={
                    <Tooltip id={`tooltip-${props.id}`} className="top-elements-box-content">
                        <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
                    </Tooltip>
                }
            >
                <div className="te-box-title-main" aria-describedby={`tooltip-${props.id}`}>
                    <div className="te-box-title-inner">
                        <div className="te-box-title">{props.title}</div>
                    </div>
                </div>
            </OverlayTrigger>
        </div>
    )
}