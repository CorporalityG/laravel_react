import React from 'react'
import './UpcomingEvent.css'
import Marquee from "react-fast-marquee"
import { SpeakerItem } from './SpeakerItem'
import { BASE_URL } from '../../../config'

function UpcomingEvent() {
    return (
        <div className='marquee-section'>
            <div className='container-lg'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Marquee speed='80' gradient={false}>
                            <div className='uce-main'>
                                <div className='uce-title'>Up Coming Event</div>
                                <div className='uce-heading-main'>
                                    <div className='uce-heading'>Corporality: Futuristic Approach</div>
                                    <div className='uce-subheading'>Invest a day to prepare for 2023</div>
                                </div>
                                <div className='uce-date'>[ November 18, 2022, AEST ]</div>
                                <div className='uce-btn'>
                                    <a href="https://corporality.global/club/corporality-global-event/#Ticket" target="_blank">Buy Ticket</a>
                                </div>
                            </div>

                            <div className='uce-speaker-main'>
                                <div className='uce-speaker-btn'>
                                    <a href="https://corporality.global/club/our-speakers/" target="_blank">Become a Speaker</a>
                                </div>

                                <SpeakerItem
                                    avatar={`${BASE_URL}/img/HomePage/UpcomingEvent/Priyambada-Mishra.png`}
                                    name={`Priyambada Mishra`}
                                    designation={`CEO and Founder`}
                                />

                                <SpeakerItem
                                    avatar={`${BASE_URL}/img/HomePage/UpcomingEvent/Suzette-Bailey.png`}
                                    name={`Suzette Bailey`}
                                    designation={`CEO and Co-Founder`}
                                />

                                <SpeakerItem
                                    avatar={`${BASE_URL}/img/HomePage/UpcomingEvent/Alan-Stevens.png`}
                                    name={`Alan Stevens`}
                                    designation={`Communications Specialist`}
                                />

                                <SpeakerItem
                                    avatar={`${BASE_URL}/img/HomePage/UpcomingEvent/Gunnar-Habitz.png`}
                                    name={`Gunnar Habitz`}
                                    designation={`Senior Partner & Alliance Manager APAC`}
                                />

                                <SpeakerItem
                                    avatar={`${BASE_URL}/img/HomePage/UpcomingEvent/Allan-Gatenby.png`}
                                    name={`Allan Gatenby Friedr FRIM CMF JP`}
                                    designation={`Director`}
                                />
                            </div>

                            <div className='uce-main uce-next-main'>
                                <div className='uce-title'>Up Coming Event</div>
                                <div className='uce-heading-main'>
                                    <div className='uce-heading'>Corporality Global Summit 2023</div>
                                    <div className='uce-subheading'></div>
                                </div>
                                <div className='uce-date'>[ 8th of March 2023 ]</div>
                                <div className='uce-btn'>
                                    <a href="https://corporality.global/club/corporality-global-event/#Ticket" target="_blank">Buy Ticket</a>
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpcomingEvent