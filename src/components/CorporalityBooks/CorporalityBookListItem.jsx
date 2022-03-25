import React, { useState } from 'react'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';

function CorporalityBookListItem(props) {
    return (
        <>
            <div className="row c-book-list-row">
                <div className="col-lg-6">
                    <div className="c-book-content-main">
                        <div className="c-book-img">
                            {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                        </div>
                        <div className="c-book-content">
                            <div className="c-book-content-item">
                                <div className="c-book-icon">
                                    <img src={BASE_URL + '/img/CorporalityBook/title-icon.png'} alt="Title" />
                                </div>
                                <div className="c-book-desc">
                                    <div className="c-book-title">{props.title}</div>
                                    <div className="c-book-subtitle">{props.subtitle}</div>
                                </div>
                            </div>

                            <div className="c-book-content-item">
                                <div className="c-book-icon">
                                    <img src={BASE_URL + '/img/CorporalityBook/date-icon.png'} alt="Date" />
                                </div>
                                <div className="c-book-desc c-book-detail-mian">
                                    <div className="c-book-detail c-book-date">{props.date}</div>
                                    <div className="c-book-detail c-book-pages">{props.pages}</div>
                                    <div className="c-book-detail c-book-size">{props.size}</div>
                                </div>
                            </div>

                            <div className="c-book-content-item">
                                <div className="c-book-icon">
                                    <img src={BASE_URL + '/img/CorporalityBook/download-icon.png'} alt="Download" />
                                </div>
                                <div className="c-book-desc c-book-btn-mian">
                                    <div className="c-book-text">{props.downloadTitle}</div>
                                    <div className="c-book-button">{props.btnText}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="c-book-video">
                        {props.video && <video src={props.video} controls={true} autoPlay={false} />}
                        {props.videoThumbnail && <img src={props.videoThumbnail} alt={props.title} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporalityBookListItem