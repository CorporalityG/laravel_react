import React from 'react'
import { Link } from 'react-router-dom'

export const PopularVideoItem = (props) => {
    return (
        <div className="col-lg-3 video-box-col">
            <div className="video-box-item">
                <iframe width="100%" src={`${props.videoUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                {/* <Link to={`/${props.slug}`}>
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}

                    <svg viewBox="0 0 80 80" focusable="false"><g fill="none" transform="translate(8 8)"><circle cx="32" cy="32" r="26" fill="#FFF"></circle><circle cx="32" cy="32" r="32" fill="#FFF" opacity=".197"></circle><polygon fill="#989BAB" points="34.806 23.89 43.288 39.553 26.325 39.553" transform="rotate(90 34.806 31.721)"></polygon></g></svg>
                </Link>

                <h3 className="box-item-title">
                    <Link to={`/${props.slug}`}>{props.title}</Link>
                </h3> */}
            </div>
        </div>
    )
}