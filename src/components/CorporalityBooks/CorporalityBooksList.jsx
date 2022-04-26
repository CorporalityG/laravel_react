import React, { useState } from 'react'
import './CorporalityBooksList.css'
import { BASE_URL } from '../../config';
import CorporalityBookListItem from './CorporalityBookListItem';
import PaymentModal from './PaymentModal';

function CorporalityBooksList() {

    const [show, setShow] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (modalId) => {
        setShow(modalId);
    }

    return (
        <>
            <div className="c-book-list-banner-container">
                <img src={BASE_URL + '/img/CorporalityBook/rectangle-1.png'} alt="rectangle-1" className="c-book-rec c-book-rec-1" />
                <img src={BASE_URL + '/img/CorporalityBook/rectangle-2.png'} alt="rectangle-2" className="c-book-rec c-book-rec-2" />
                <img src={BASE_URL + '/img/CorporalityBook/rectangle-3.png'} alt="rectangle-3" className="c-book-rec c-book-rec-3" />

                <div className="container">
                    <div className="row c-book-list-banner-row">
                        <div className="col-lg-7">
                            <div className="c-book-list-banner-content">
                                <h1>Corporality books</h1>
                                <p>Corporality’s collection of books offers you diversified knowledge which helps enhance your outlook towards life and enables you to seize opportunities effectively. “Journey of Perseverance,” tells the story of an adamant entrepreneur. Our essential marketing reports provide an analytical sense of how marketing works in different industries.</p>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="c-book-list-banner-img">
                                <img src={BASE_URL + '/img/CorporalityBook/c-book-banner.svg'} alt="Corporality books" />
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
                                <div className="bf-title">An inspiring trip towards change, adaptation, and success by doing what you have to do to get tothe top.</div>
                            </div>
                        </div>

                        <div className="bf-content-item">
                            <div className="bf-icon">
                                <img src={`${BASE_URL}/img/CorporalityBook/date-icon.png`} alt="Date" />
                            </div>
                            <div className="bf-detail-mian">
                                <div className="bf-detail bf-date">July 26, 2021</div>
                                <div className="bf-detail bf-pages">245 pages</div>
                                <div className="bf-detail bf-size">Size - 545kb </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={`${BASE_URL}/img/CorporalityBook/book-preview.png`} alt="book-preview" className="book-preview" />
                <img src={`${BASE_URL}/img/CorporalityBook/favicon.png`} alt="favicon" className="favicon" />

                <div className="book-front-btn">
                    <div className="bf-sample-btn">Sample Chapter</div>
                    <div className="bf-buy-btn" onClick={() => handleShow('payment') }>Buy Now</div>
                </div>

                <div className="book-front-video">
                    <video src={`${BASE_URL}/img/CorporalityBook/journey-of-perseverance.mp4`} controls={true} autoPlay={false} />
                </div>
            </div>

            <PaymentModal show={show} handleClose={handleClose} />

            <div className="c-book-list-container">
                <div className="container">
                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'Corporality Compilation'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'February 2, 2021'}
                        pages={'61 pages'}
                        size={'Size - 19MB'}
                        downloadTitle={'Preview'}
                        btnText={'Download'}
                        btnType={'download'}
                        video={''}
                        videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                    />

                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'Corporality Strikers'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'February 25, 2021'}
                        pages={'45 pages'}
                        size={'Size - 2MB'}
                        downloadTitle={'Preview'}
                        btnText={'Download'}
                        btnType={'download'}
                        video={''}
                        videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                    />

                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'Corporality-Intended Maturation Model'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'February 25, 2021'}
                        pages={'15 pages'}
                        size={'Size - 158KB'}
                        downloadTitle={'Preview'}
                        btnText={'Download'}
                        btnType={'download'}
                        video={''}
                        videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                    />

                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'OUTBOUND AND INBOUND MARKETING'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'February 25, 2021'}
                        pages={'44 pages'}
                        size={'Size - 942KB'}
                        downloadTitle={'Preview'}
                        btnText={'Download'}
                        btnType={'download'}
                        video={''}
                        videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                    />
                </div>
            </div>
        </>
    )
}

export default CorporalityBooksList