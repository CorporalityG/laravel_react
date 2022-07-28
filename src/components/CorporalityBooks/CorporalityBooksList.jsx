import React, { useState, useEffect } from 'react'
import './CorporalityBooksList.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import CorporalityBookListItem from './CorporalityBookListItem';
import PaymentModal from './PaymentModal';
import { Helmet } from "react-helmet";

function CorporalityBooksList() {

    const page_slug = 'corporality-books';

    const [pageDetail, setPageDetail] = useState([]);
    const [show, setShow] = useState(0);

    useEffect(() => {
        getPageDetail()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    const handleClose = () => setShow(false);
    const handleShow = (modalId) => {
        setShow(modalId);
    }

    return (
        <>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/corporality-books/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className="c-book-list-banner-container">
                            <img src={BASE_URL + '/img/CorporalityBook/rectangle-1.png'} alt="rectangle-1" className="c-book-rec c-book-rec-1" />
                            <img src={BASE_URL + '/img/CorporalityBook/rectangle-2.png'} alt="rectangle-2" className="c-book-rec c-book-rec-2" />
                            <img src={BASE_URL + '/img/CorporalityBook/rectangle-3.png'} alt="rectangle-3" className="c-book-rec c-book-rec-3" />

                            <div className="container">
                                <div className="row c-book-list-banner-row">
                                    <div className="col-lg-7">
                                        <div className="c-book-list-banner-content">
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <p>{`${pageDetail.detail.banner_description}`}</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="c-book-list-banner-img">
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="c-book-list-book-section">
                            <img src={`${BASE_URL}/img/CorporalityBook/dots.png`} alt="Dots" className="dots" />
                            <img src={`${BASE_URL}/img/CorporalityBook/book-rec.png`} alt="book-rec" className="book-rec" />
                            <img src={`${BASE_URL}/img/CorporalityBook/book-vector.png`} alt="book-vector" className="book-vector" />
                            <img src={`${BASE_URL}/img/CorporalityBook/book-line.png`} alt="book-line" className="book-line" />
                            <img src={`${BASE_URL}/img/CorporalityBook/book-1.png`} alt="book-1" className="book-1" />

                            <div className="book-front-main">
                                <img src={`${BASE_URL}/img/CorporalityBook/book-front.png`} alt="book-front" className="book-front-img" />
                                <img src={`${BASE_URL}/img/CorporalityBook/book-2.png`} alt="book-2" className="book-2" />
                                <div className="book-front-content">
                                    <div className="bf-content-item">
                                        <div className="bf-icon">
                                            <img src={`${BASE_URL}/img/CorporalityBook/title-icon.png`} alt="Title" />
                                        </div>
                                        <div className="bf-desc">
                                            <div className="bf-title">{`${pageDetail.detail.book_1_subtitle}`}</div>
                                        </div>
                                    </div>

                                    <div className="bf-content-item">
                                        <div className="bf-icon">
                                            <img src={`${BASE_URL}/img/CorporalityBook/date-icon.png`} alt="Date" />
                                        </div>
                                        <div className="bf-detail-mian">
                                            <div className="bf-detail bf-date">{`${pageDetail.detail.book_1_date}`}</div>
                                            <div className="bf-detail bf-pages">{`${pageDetail.detail.book_1_pages}`}</div>
                                            <div className="bf-detail bf-size">{`${pageDetail.detail.book_1_size}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.book_1_image}`} alt={`${pageDetail.detail.book_1_title}`} className="book-preview" />
                            <img src={`${BASE_URL}/img/CorporalityBook/favicon.png`} alt="favicon" className="favicon" />

                            <div className="book-front-btn">
                                <div className="bf-sample-btn">{`${pageDetail.detail.book_1_btn_1_text}`}</div>
                                <div className="bf-buy-btn" onClick={() => handleShow('payment')}>{`${pageDetail.detail.book_1_btn_2_text}`}</div>
                            </div>

                            <div className="book-front-video">
                                <video src={`${API_IMG_URL}pages/${pageDetail.detail.book_1_video}`} controls={true} autoPlay={false} />
                            </div>
                        </div>

                        <PaymentModal show={show} handleClose={handleClose} />

                        <div className="c-book-list-container">
                            <div className="container">
                                <CorporalityBookListItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.book_2_image}`}
                                    title={`${pageDetail.detail.book_2_title}`}
                                    subtitle={`${pageDetail.detail.book_2_subtitle}`}
                                    date={`${pageDetail.detail.book_2_date}`}
                                    pages={`${pageDetail.detail.book_2_pages}`}
                                    size={`${pageDetail.detail.book_2_size}`}
                                    downloadTitle={`${pageDetail.detail.book_2_btn_1_text}`}
                                    btnText={`${pageDetail.detail.book_2_btn_2_text}`}
                                    btnType={'download'}
                                    video={pageDetail.detail.book_2_video ? `${API_IMG_URL}pages/${pageDetail.detail.book_2_video}` : ''}
                                    videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                                />

                                <CorporalityBookListItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.book_3_image}`}
                                    title={`${pageDetail.detail.book_3_title}`}
                                    subtitle={`${pageDetail.detail.book_3_subtitle}`}
                                    date={`${pageDetail.detail.book_3_date}`}
                                    pages={`${pageDetail.detail.book_3_pages}`}
                                    size={`${pageDetail.detail.book_3_size}`}
                                    downloadTitle={`${pageDetail.detail.book_3_btn_1_text}`}
                                    btnText={`${pageDetail.detail.book_3_btn_2_text}`}
                                    btnType={'download'}
                                    video={pageDetail.detail.book_3_video ? `${API_IMG_URL}pages/${pageDetail.detail.book_3_video}` : ''}
                                    videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                                />

                                <CorporalityBookListItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.book_4_image}`}
                                    title={`${pageDetail.detail.book_4_title}`}
                                    subtitle={`${pageDetail.detail.book_4_subtitle}`}
                                    date={`${pageDetail.detail.book_4_date}`}
                                    pages={`${pageDetail.detail.book_4_pages}`}
                                    size={`${pageDetail.detail.book_4_size}`}
                                    downloadTitle={`${pageDetail.detail.book_4_btn_1_text}`}
                                    btnText={`${pageDetail.detail.book_4_btn_2_text}`}
                                    btnType={'download'}
                                    video={pageDetail.detail.book_4_video ? `${API_IMG_URL}pages/${pageDetail.detail.book_4_video}` : ''}
                                    videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                                />

                                <CorporalityBookListItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.book_5_image}`}
                                    title={`${pageDetail.detail.book_5_title}`}
                                    subtitle={`${pageDetail.detail.book_5_subtitle}`}
                                    date={`${pageDetail.detail.book_5_date}`}
                                    pages={`${pageDetail.detail.book_5_pages}`}
                                    size={`${pageDetail.detail.book_5_size}`}
                                    downloadTitle={`${pageDetail.detail.book_5_btn_1_text}`}
                                    btnText={`${pageDetail.detail.book_5_btn_2_text}`}
                                    btnType={'download'}
                                    video={pageDetail.detail.book_5_video ? `${API_IMG_URL}pages/${pageDetail.detail.book_5_video}` : ''}
                                    videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                                />
                            </div>
                        </div>
                    </>
                    : null
            }
        </>
    )
}

export default CorporalityBooksList