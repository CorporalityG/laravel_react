import React from 'react'
import './CorporalityBooksList.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import CorporalityBookListItem from './CorporalityBookListItem';

function CorporalityBooksList() {
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, nunc sed donec sapien condimentum porta. Eget in nullam pharetra velit. Interdum integer turpis hac condimentum nam. In libero pulvinar nisi ullamcorper commodo sagittis massa sem. Tincidunt rhoncus sed lectus sed.</p>
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

            <div className="c-book-list-container">
                <div className="container">
                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/journey-of-perseverance.png'}
                        title={'Journey of perseverance'}
                        subtitle={'An inspiring trip towards change, adaptation, and success by doing'}
                        date={'July 26, 2021'}
                        pages={'245 pages'}
                        size={'Size - 545kb'}
                        downloadTitle={'Sample Chapter'}
                        btnText={'Buy Now'}
                        btnType={'payment'}
                        video={BASE_URL + '/img/CorporalityBook/journey-of-perseverance.mp4'}
                    />

                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'Essential Marketing Reports'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'July 26, 2021'}
                        pages={'15 pages'}
                        size={'Size - 545kb'}
                        downloadTitle={'Preview'}
                        btnText={'Download'}
                        btnType={'download'}
                        video={''}
                        videoThumbnail={BASE_URL + '/img/CorporalityBook/c-book-video-preview.png'}
                    />

                    <CorporalityBookListItem
                        thumbnail={BASE_URL + '/img/CorporalityBook/c-book-img-preview.png'}
                        title={'Essential Marketing Reports'}
                        subtitle={'Loerm iposum have you go to somethinga have a good think can check...'}
                        date={'July 26, 2021'}
                        pages={'15 pages'}
                        size={'Size - 545kb'}
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