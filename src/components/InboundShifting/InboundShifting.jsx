import React from 'react'
import './InboundShifting.css'
import { BASE_URL } from '../../config'

function InboundShifting() {
    return (
        <>
            <div className="is-banner-section">
                <img src={BASE_URL + '/img/InboundShifting/banner-dots.png'} alt="Why Corporality Effect?" className="is-banner-img" />
                <img src={BASE_URL + '/img/InboundShifting/banner-vector.png'} alt="Vector" className="is-banner-vector" />

                <img src={BASE_URL + '/img/InboundShifting/rec-1.png'} alt="Rec 1" className="rec-1" />
                <img src={BASE_URL + '/img/InboundShifting/rec-2.png'} alt="Rec 2" className="rec-2" />

                <div className="is-banner-social-main">
                    <div className="is-banner-social-img">
                        <img src={BASE_URL + '/img/InboundShifting/social.png'} alt="Title" />
                    </div>
                    <div className="is-banner-social-icon-main">
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="is-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row is-banner-content-row">
                        <div className="col-md-12">
                            <div className="is-banner-content">
                                <h1>Ride on to success with your commitment.</h1>
                                <p>Did you notice that the market is more dynamic than ever? Competitors are becoming more effective and harder to track. Corporality is your inbound marketing partner that can help bring your business to a whole new level.</p>
                                <p>We adopt with the shifting market to help you achieve your most aggressive growth goals with the #InboundShift.</p>
                                <div className="is-banner-btn" onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}>Book Your Discovery Session</div>
                            </div>
                        </div>

                        <div className="is-banner-phone">
                            <img src={BASE_URL + '/img/InboundShifting/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-commitment-section">
                <div className="container">
                    <div className="row is-commitment-row">
                        <div className="col-md-12">
                            <div className="is-commitment-content">
                                <h2>Choose the Path to Corporality Effect with a 6-month commitment</h2>
                                <p>Commitment. It’s a word we dedicate for you for signing up with Corporality Effect. See why it’s effective:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="is-shifting-section">
                <div className="container">
                    <div className="row is-shifting-row">
                        <div className="col-lg-6">
                            <div className="is-shifting-content">
                                <h2>What is Inbound Shifting?</h2>
                                <p>Any question that comes to an ordinary person’s mind is being searched online. To take advantage of the digital era, your website and social media accounts should be content-centred. Both shall serve as your virtual offices; a visually appealing site with well-written content with the right context shall pull visitors inward. It is called inbound marketing as such that it turns your website into such a conversion machine.</p>
                                <p>This methodology forges a strong connection to the market by making your organisation as the resource authority who understands the client’s difficulties and providing the right solutions for them. The high engagement generated by the content brings in leads.</p>
                                <p>This leads up to maximising your website to become a lead magnet, and you can add value to it with the use of CTAs, USPs, testimonials, and case studies. You can eventually nurture customer relationships efficiently if you employ contemporary techniques in your business such as Automation.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="is-shifting-img">
                                <img src={BASE_URL + '/img/InboundShifting/What-is-Inbound-Shifting.png'} alt="What is Inbound Shifting?" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InboundShifting