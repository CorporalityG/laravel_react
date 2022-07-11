import React, { useEffect, useState } from 'react'
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";
import { useParams } from 'react-router-dom'

function SingleClient() {

    const params = useParams();
    const [singleClient, setSingleClient] = useState([]);
    // const [relatedClient, setRelatedClient] = useState([]);

    useEffect(() => {
        getClient(params.client_slug);
        // getRelatedClient(params.client_slug);
    }, [params])

    async function getClient(slug) {
        let result = await fetch(`${API_BASE_URL}/single-client/${slug}`);
        result = await result.json();
        setSingleClient(result);
    }

    /* async function getRelatedClient(slug) {
        let result = await fetch(`${API_BASE_URL}/related-clients/${slug}`);
        result = await result.json();
        setRelatedClient(result);
    } */

    return (
        <div className="cause-studies-container">

            {
                singleClient ?
                    <>
                        <div className="case-study-banner">
                            <img src={BASE_URL + '/img/case-study-rec-1.png'} alt="case-study-rec-1" className="case-study-rec case-study-rec-1" />
                            <img src={BASE_URL + '/img/case-study-rec-2.png'} alt="case-study-rec-2" className="case-study-rec case-study-rec-2" />
                            <img src={BASE_URL + '/img/case-study-rec-3.png'} alt="case-study-rec-3" className="case-study-rec case-study-rec-3" />

                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="case-study-banner-content">
                                            <div className="heading">
                                                <h1>{`${singleClient.title}`}</h1>
                                                <div className="title-line"></div>
                                            </div>
                                            <div className="content">
                                                <p>{`${singleClient.short_description ?? ''}`}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="case-study-logo-main">
                                            <img src={`${API_IMG_URL}clients/${singleClient.logo}`} alt={`${singleClient.title}`} className="case-study-logo" />
                                            <img src={`${API_IMG_URL}clients/${singleClient.logo_icon}`} alt={`${singleClient.title}-icon`} className="case-study-icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="case-study-glance-container">
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2>At a glance</h2>
                                    </div>
                                </div>

                                <div className="row case-study-glance-box-row">
                                    <div className="col-md-4">
                                        <div className="case-study-glance-box">
                                            <img src={singleClient.glance_1_image ? `${API_IMG_URL}clients/${singleClient.glance_1_image}` : ''} alt={`${singleClient.glance_1_title ?? ''}`} />
                                            <div className="case-study-glance-box-title">{`${singleClient.glance_1_title ?? ''}`}</div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="case-study-glance-box">
                                            <img src={singleClient.glance_2_image ? `${API_IMG_URL}clients/${singleClient.glance_2_image}` : ''} alt={`${singleClient.glance_2_title ?? ''}`} />
                                            <div className="case-study-glance-box-title">{`${singleClient.glance_2_title ?? ''}`}</div>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="case-study-glance-box">
                                            <img src={singleClient.glance_3_image ? `${API_IMG_URL}clients/${singleClient.glance_3_image}` : ''} alt={`${singleClient.glance_3_title ?? ''}`} />
                                            <div className="case-study-glance-box-title">{`${singleClient.glance_3_title ?? ''}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-lg">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="case-study-bottom-line"></div>
                                </div>
                            </div>
                        </div>

                        <div className="case-study-solution-container">
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="case-study-solution-content" dangerouslySetInnerHTML={{ __html: singleClient.description }}></div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="case-study-content-img">
                                            <img src={singleClient.image ? `${API_IMG_URL}clients/${singleClient.image}` : ''} alt={`${singleClient.title ?? ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="case-study-outcome-container">
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-8 offset-md-4">
                                        <div className="case-study-outcome-video">
                                            <div className="case-study-outcome-video-banner">
                                                <img src={singleClient.video_thumnail ? `${API_IMG_URL}clients/${singleClient.video_thumnail}` : ''} alt="video-banner" />
                                            </div>
                                            <div className="case-study-outcome-play">
                                                <img src={BASE_URL + '/img/case-study-outcome-video-play.png'} alt="Play" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row case-study-outcome-content-main">
                                    <div className="col-md-6">
                                        <div className="case-study-testimonial">
                                            <img src={singleClient.logo ? `${API_IMG_URL}clients/${singleClient.logo}` : ''} alt={`${singleClient.title ?? ''}`} className="case-study-testi-logo" />
                                            <div className="case-study-testi-content">
                                                <img src={BASE_URL + '/img/testi-quote.png'} alt="testi-quote" className="case-study-testi-quote" />
                                                <p>{`${singleClient.quote ?? ''}`}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="case-study-business-level-content">
                                            <div className="case-study-business-level-title">{`${singleClient.business_level_title ?? ''}`}</div>
                                            <p>{`${singleClient.business_level_description ?? ''}`}</p>
                                            <div className="case-study-business-level-form">
                                                <div className="row">
                                                    <div className="col-sm-6 form-group">
                                                        <input type="text" className="form-control" placeholder="Name" />
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                        <input type="email" className="form-control" placeholder="Email" />
                                                    </div>

                                                    <div className="col-md-12">
                                                        <button type="submit" className="business-level-btn">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="case-study-related-container">
                            <div className="container-lg">
                                <div className="row">
                                    <div className="col-md-12">
                                        <RelatedCaseStudyCarousel slug={`${singleClient.slug}`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }

        </div>
    )
}

export default SingleClient