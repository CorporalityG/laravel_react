import React, { useEffect, useState } from 'react'
import './UpcomingEvent.css'
import Marquee from "react-fast-marquee"
import { SpeakerItem } from './SpeakerItem'
import { API_BASE_URL, API_IMG_URL } from '../../../config'
import axios from "axios";

function UpcomingEvent() {

    const page_slug = 'home';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        getPageDetail()
    }, []);

    const getPageDetail = () => {
        axios.get(`${API_BASE_URL}/page-detail/${page_slug}`)
            .then(response => {
                setPageDetail(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className='marquee-section'>
            {
                pageDetail.detail ?
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <Marquee speed='80' gradient={false}>
                                    <div className='uce-main'>
                                        {pageDetail.detail.event_1_title && <div className='uce-title'>{pageDetail.detail.event_1_title}</div>}

                                        <div className='uce-heading-main'>
                                            {pageDetail.detail.event_1_heading && <div className='uce-heading'>{pageDetail.detail.event_1_heading}</div>}
                                            {pageDetail.detail.event_1_subheading && <div className='uce-subheading'>{pageDetail.detail.event_1_subheading}</div>}
                                        </div>

                                        {pageDetail.detail.event_1_date && <div className='uce-date'>{pageDetail.detail.event_1_date}</div>}

                                        {
                                            pageDetail.detail.event_1_btn_text &&
                                            <div className='uce-btn'>
                                                <a href={`${pageDetail.detail.event_1_btn_link ?? '#'}`} target="_blank">{pageDetail.detail.event_1_btn_text}</a>
                                            </div>
                                        }
                                    </div>

                                    <div className='uce-speaker-main'>
                                        {
                                            pageDetail.detail.event_1_speaker_btn_text &&
                                            <div className='uce-speaker-btn'>
                                                <a href={`${pageDetail.detail.event_1_speaker_btn_link ?? '#'}`} target="_blank">{pageDetail.detail.event_1_speaker_btn_text}</a>
                                            </div>
                                        }

                                        <SpeakerItem
                                            avatar={pageDetail.detail.event_1_speaker_1_image ? `${API_IMG_URL}pages/${pageDetail.detail.event_1_speaker_1_image}` : ''}
                                            name={pageDetail.detail.event_1_speaker_1_name}
                                            designation={pageDetail.detail.event_1_speaker_1_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.detail.event_1_speaker_2_image ? `${API_IMG_URL}pages/${pageDetail.detail.event_1_speaker_2_image}` : ''}
                                            name={pageDetail.detail.event_1_speaker_2_name}
                                            designation={pageDetail.detail.event_1_speaker_2_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.detail.event_1_speaker_3_image ? `${API_IMG_URL}pages/${pageDetail.detail.event_1_speaker_3_image}` : ''}
                                            name={pageDetail.detail.event_1_speaker_3_name}
                                            designation={pageDetail.detail.event_1_speaker_3_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.detail.event_1_speaker_4_image ? `${API_IMG_URL}pages/${pageDetail.detail.event_1_speaker_4_image}` : ''}
                                            name={pageDetail.detail.event_1_speaker_4_name}
                                            designation={pageDetail.detail.event_1_speaker_4_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.detail.event_1_speaker_5_image ? `${API_IMG_URL}pages/${pageDetail.detail.event_1_speaker_5_image}` : ''}
                                            name={pageDetail.detail.event_1_speaker_5_name}
                                            designation={pageDetail.detail.event_1_speaker_5_designation}
                                        />
                                    </div>

                                    <div className='uce-main uce-next-main'>
                                        {pageDetail.detail.event_2_title && <div className='uce-title'>{pageDetail.detail.event_2_title}</div>}

                                        <div className='uce-heading-main'>
                                            {pageDetail.detail.event_2_heading && <div className='uce-heading'>{pageDetail.detail.event_2_heading}</div>}
                                            {pageDetail.detail.event_2_subheading && <div className='uce-subheading'>{pageDetail.detail.event_2_subheading}</div>}
                                        </div>

                                        {pageDetail.detail.event_2_date && <div className='uce-date'>{pageDetail.detail.event_2_date}</div>}

                                        {
                                            pageDetail.detail.event_2_btn_text &&
                                            <div className='uce-btn'>
                                                <a href={`${pageDetail.detail.event_2_btn_link ?? '#'}`} target="_blank">{pageDetail.detail.event_2_btn_text}</a>
                                            </div>
                                        }
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default UpcomingEvent