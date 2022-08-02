import React from 'react'

export const PopularVideoItem = (props) => {
    return (
        <div className="col-lg-3 col-md-6 video-box-col">
            <div className="video-box-item">
                <iframe width="100%" src={`${props.videoUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}