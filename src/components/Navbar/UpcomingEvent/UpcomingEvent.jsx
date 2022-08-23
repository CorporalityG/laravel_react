import React, { useEffect, useState } from 'react'
import './UpcomingEvent.css'
import Marquee from "react-fast-marquee"
import { SpeakerItem } from './SpeakerItem'
import { API_BASE_URL, API_IMG_URL } from '../../../config'
import axios from "axios";

function UpcomingEvent(pageDetail) {

    /* const page_slug = 'home';

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
    } */

    return (
        <div className='marquee-section'>
            {
                pageDetail ?
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <Marquee speed='80' gradient={false}>
                                    <div className='uce-main'>
                                        {pageDetail.event_1_title && <div className='uce-title'>{pageDetail.event_1_title}</div>}

                                        <div className='uce-heading-main'>
                                            {pageDetail.event_1_heading && <div className='uce-heading'>{pageDetail.event_1_heading}</div>}
                                            {pageDetail.event_1_subheading && <div className='uce-subheading'>{pageDetail.event_1_subheading}</div>}
                                        </div>

                                        {pageDetail.event_1_date && <div className='uce-date'>{pageDetail.event_1_date}</div>}

                                        {
                                            pageDetail.event_1_btn_text &&
                                            <div className='uce-btn'>
                                                <a href={`${pageDetail.event_1_btn_link ?? '#'}`} target="_blank">{pageDetail.event_1_btn_text}</a>
                                            </div>
                                        }
                                    </div>

                                    <div className='uce-speaker-main'>
                                        {
                                            pageDetail.event_1_speaker_btn_text &&
                                            <div className='uce-speaker-btn'>
                                                <a href={`${pageDetail.event_1_speaker_btn_link ?? '#'}`} target="_blank">{pageDetail.event_1_speaker_btn_text}</a>
                                            </div>
                                        }

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_1_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_1_image}` : ''}
                                            name={pageDetail.event_1_speaker_1_name}
                                            designation={pageDetail.event_1_speaker_1_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_2_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_2_image}` : ''}
                                            name={pageDetail.event_1_speaker_2_name}
                                            designation={pageDetail.event_1_speaker_2_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_3_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_3_image}` : ''}
                                            name={pageDetail.event_1_speaker_3_name}
                                            designation={pageDetail.event_1_speaker_3_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_4_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_4_image}` : ''}
                                            name={pageDetail.event_1_speaker_4_name}
                                            designation={pageDetail.event_1_speaker_4_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_5_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_5_image}` : ''}
                                            name={pageDetail.event_1_speaker_5_name}
                                            designation={pageDetail.event_1_speaker_5_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_6_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_6_image}` : ''}
                                            name={pageDetail.event_1_speaker_6_name}
                                            designation={pageDetail.event_1_speaker_6_designation}
                                        />

                                        <SpeakerItem
                                            avatar={pageDetail.event_1_speaker_7_image ? `${API_IMG_URL}pages/${pageDetail.event_1_speaker_7_image}` : ''}
                                            name={pageDetail.event_1_speaker_7_name}
                                            designation={pageDetail.event_1_speaker_7_designation}
                                        />
                                    </div>

                                    <div className='uce-main uce-next-main'>
                                        {pageDetail.event_2_title && <div className='uce-title'>{pageDetail.event_2_title}</div>}

                                        <div className='uce-heading-main'>
                                            {pageDetail.event_2_heading && <div className='uce-heading'>{pageDetail.event_2_heading}</div>}
                                            {pageDetail.event_2_subheading && <div className='uce-subheading'>{pageDetail.event_2_subheading}</div>}
                                        </div>

                                        {pageDetail.event_2_date && <div className='uce-date'>{pageDetail.event_2_date}</div>}

                                        {
                                            pageDetail.event_2_btn_text &&
                                            <div className='uce-btn'>
                                                <a href={`${pageDetail.event_2_btn_link ?? '#'}`} target="_blank">{pageDetail.event_2_btn_text}</a>
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