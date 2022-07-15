import React from 'react'
import './Faqs.css'
import Accordion from 'react-bootstrap/Accordion'
import { BASE_URL, API_IMG_URL } from '../../../config';

function Faqs(pageDetail) {

    return (
        <>
            {
                pageDetail ?
                    <div className="faqs-container">
                        <div className="faq-banner-container">
                            <img src={`${API_IMG_URL}pages/${pageDetail.faq_image}`} alt={`${pageDetail.faq_title}`} />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="faq-list-container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h1 className="faq-heading">{`${pageDetail.faq_title}`}</h1>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="faqs-list">
                                                    <Accordion>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>
                                                                <span>{`${pageDetail.faq_item_1_title}`}
                                                                </span>
                                                                <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.faq_item_1_description }}></div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="2">
                                                            <Accordion.Header>
                                                                <span>{`${pageDetail.faq_item_2_title}`}
                                                                </span>
                                                                <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.faq_item_2_description }}></div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="3">
                                                            <Accordion.Header>
                                                                <span>{`${pageDetail.faq_item_3_title}`}
                                                                </span>
                                                                <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.faq_item_3_description }}></div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>

                                                        <Accordion.Item eventKey="4">
                                                            <Accordion.Header>
                                                                <span>{`${pageDetail.faq_item_4_title}`}
                                                                </span>
                                                                <img src={BASE_URL + '/img/faq-plus-icon.png'} alt="+" />
                                                            </Accordion.Header>
                                                            <Accordion.Body>
                                                                <div dangerouslySetInnerHTML={{ __html: pageDetail.faq_item_4_description }}></div>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Faqs