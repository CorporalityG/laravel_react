import React from 'react'
import './CulturallyConditioned.css'
import { BASE_URL } from '../../config'
import { TopElementItem } from './TopElementItem'
import Accordion from 'react-bootstrap/Accordion'
import { ProcessItem } from './ProcessItem'

function CulturallyConditioned() {
    return (
        <>
            <div className="cc-banner-section">
                <img src={BASE_URL + '/img/CulturallyConditioned/banner-dots.png'} alt="Culturally Conditioned" className="cc-banner-img" />
                <img src={BASE_URL + '/img/CulturallyConditioned/banner-vector.png'} alt="Vector" className="cc-banner-vector" />

                <img src={BASE_URL + '/img/CulturallyConditioned/rec-1.png'} alt="Rec 1" className="rec-1" />
                <img src={BASE_URL + '/img/CulturallyConditioned/rec-2.png'} alt="Rec 2" className="rec-2" />

                <div className="cc-banner-social-main">
                    <div className="cc-banner-social-img">
                        <img src={BASE_URL + '/img/CulturallyConditioned/social.png'} alt="Social" />
                    </div>
                    <div className="cc-banner-social-icon-main">
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="cc-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row cc-banner-content-row">
                        <div className="col-md-12">
                            <div className="cc-banner-content">
                                <h1>Fragmented leadership and core teams result in wobbly Marketing Strategie</h1>
                                <p>Our transformative Culturally-Conditioned framework is designed to establish participation and excitement around accountability. It taps all relevant stakeholders to align with your vision for your Marketing objective and Sales outline.</p>
                                <div className="cc-banner-btn" onClick={() => window.open("https://zohoadmin-corporality.zohobookings.com.au/#/customer/discoverycall", "_blank")}>Book Your Discovery Session</div>
                            </div>
                        </div>

                        <div className="cc-banner-phone">
                            <img src={BASE_URL + '/img/CulturallyConditioned/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cc-work-mind-section">
                <div className="container">
                    <div className="row cc-wm-row">
                        <div className="col-lg-6">
                            <div className="cc-wm-content">
                                <h2>Work as One Mind</h2>
                                <p>Your company has grown from its birth pains to where you are now; hired great people, set forth a solid, attainable vision, and currently venturing to create a perfect fit. Still, you feel as if something isn’t going right, and you need that one thing that will bind together your leadership and marketing teams to steer your efforts in the right direction and achieve your desired sales goals.</p>
                                <p>It’s a common occurrence that your customers experience interacting with sales and leadership teams very differently from how they experience your company and products through the content you have on your website or other interaction platforms.</p>
                                <p>Aside from your market, your business has internal customers. That is, your leadership and sales teams – that serve one another, the organisation, and ideally reach for a common goal. What you need is your team to be #CulturallyConditioned to deliver one great experience in all channels.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cc-wm-img">
                                <img src={BASE_URL + '/img/CulturallyConditioned/Work-as-One-Mind.png'} alt="Work as One Mind" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cc-major-problem-section">
                <div className="container-fluid px-0">
                    <div className="row cc-mp-row">
                        <div className="col-lg-6">
                            <div className="cc-mp-img">
                                <img src={BASE_URL + '/img/CulturallyConditioned/major-problem-banner.png'} alt="What major problem" />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div className="cc-mp-content">
                                <h2>What major problem does the Culturally-Conditioned framework address?</h2>
                                <p>Technical skills and methodologies matter, but in reality they are challenged when building your strategy with a futuristic approach. We’re more than ready for that with our extensive experience. We help you define the problem with a scenario planning strategy. You can unfold the layers of possibilities to map out the web of challenges and design the needed value proposition to deliver the best solution.</p>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>

            <div className="cc-top-elements-section">
                <div className="container">
                    <div className="row cc-te-content-row">
                        <div className="col-md-12">
                            <div className="cc-te-content">
                                <div className="cc-te-title">
                                    <h2>What are the top elements of the framework?</h2>
                                    <h2>What makes our process stand out?</h2>
                                </div>
                                <p>In a digital transformation project, you can’t plan a solution until you define the problem. While every engagement is different, we have created a toolkit that has successfully driven change initiatives.</p>
                                <div className="cc-te-btn">What we do</div>
                            </div>
                        </div>
                    </div>

                    <div className="row cc-te-boxes-row">
                        <div className="col-md-12 cc-te-boxes-col">
                            <TopElementItem
                                id={1}
                                title={'Predatory Marketing'}
                                content={'<p>We differentiate our strategy by following a Predatory Marketing approach to reduce the marketing noise.</p>'}
                            />

                            <TopElementItem
                                id={2}
                                title={'A strategic mind-set'}
                                content={'<p>If immersive technologies are going to fuel your growth, you need an industry expert like us who can accurately and efficiently determine whether a concept is a true product-market fit.</p>'}
                            />

                            <TopElementItem
                                id={3}
                                title={'Speed and agility'}
                                content={'<p>We have proven processes for agile delivery, utilising a “fail fast” principle that can save you massive amounts of time and money, and pivot to build and scale viable concepts at speed.</p>'}
                            />

                            <TopElementItem
                                id={4}
                                title={'Audience empathetic analysis'}
                                content={'<p>Our effective methods solve real customer problems. As your partner, we do this in a way that connects to people’s motivations, desires, and frustrations.</p>'}
                            />

                            <TopElementItem
                                id={5}
                                title={'Futuristic Approach'}
                                content={'<p>The framework is designed to address all identified criticisms and potential friction in a sustainable manner. It encourages organisations to govern and manage marketing in the most holistic, highly-engaged, and integrated way.</p>'}
                            />
                        </div>

                        <div className="cc-te-boxes-img">
                            <img src={BASE_URL + '/img/CulturallyConditioned/top-elements-img.png'} alt="top elements" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="cc-work-section">
                <div className="container">
                    <div className="row cc-work-title-row">
                        <div className="col-md-12">
                            <div className="cc-work-heading">
                                <h2>How Does It Work?</h2>
                                <p>Corporality Effect begins with a 2-day Workshop, which your leadership, sales, marketing, and related teams will participate in. Over the course of 52 weeks, you can work with our mentoring and development teams to work on the following:</p>
                                <div className="cc-work-btn">Corporality Culture</div>
                            </div>
                        </div>
                    </div>

                    <div className="row cc-work-content-row">
                        <div className="col-lg-6">
                            <Accordion className="cc-work-accordion-main">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div className="cc-work-heading">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/favicon-tm-1.png'} alt="Bundled skills" />
                                            <span>Bundled skills</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Vision and brainpower are non-negotiable, but you need a team of thinkers with a strong bias for action. UX experts, designers, copywriters, data scientists and strategists can ensure ideas are practical and help you follow through.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <div className="cc-work-heading">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/favicon-tm-2.png'} alt="Experienced with ideas" />
                                            <span>Experienced with ideas</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>A good partner will come with many ideas. A great partner will maximise all the resources at your disposal, collaborating to unlock ideas your employees and customers didn’t know they had.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <div className="cc-work-heading">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/favicon-tm-3.png'} alt="Great leadership and governance process" />
                                            <span>Great leadership and governance process</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Leadership is knowing what and how to drive a system efficiently. As your partner we can help you create a comprehensive guide for your team that they can follow wholeheartedly.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <div className="cc-work-heading">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/favicon-tm-1.png'} alt="Asset-building mindset" />
                                            <span>Asset-building mindset</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>Innovations are always welcome to any business portfolio. With Corporality’s collaborative spirit, we assist you in building up a robust asset base through a futuristic mindset.</p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <div className="cc-work-heading">
                                            <img src={BASE_URL + '/img/CulturallyConditioned/favicon-tm-2.png'} alt="Practice implementation to stay in the lead" />
                                            <span>Practice implementation to stay in the lead</span>
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>The Corporality leadership, along with its well-experienced and trained staff brings a complete package to keep you ahead in your industry. We groom you to become an industry leader with your legacy.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>

                        <div className="col-lg-6">
                            <div className="cc-work-content-main">
                                <img src={BASE_URL + '/img/CulturallyConditioned/How-Does-It-Work.png'} alt="How-Does-It-Work" />

                                <h3>Sharing experience with Corporality transformation consultants</h3>
                                <p>Selecting a team to work on business-critical projects is no easy decision, but an effective partner has essential qualities to achieve the brand position you seek, and we at Corporality have them.</p>

                                <h3>Company culture influencer</h3>
                                <p>An intelligent strategy is nothing if not executed well. Implementation is a practice that should be consistently good, and we at Corporality can aid you in aligning your implementation well.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cc-process-section">
                <div className="container">
                    <div className="row cc-process-title-row">
                        <div className="col-md-12">
                            <div className="cc-process-title-content">
                                <h2>What’s the Process?</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row cc-process-boxes-row">
                        <ProcessItem
                            thumbnail={BASE_URL + '/img/CulturallyConditioned/Media-List-Building.png'}
                            title={'Media List Building'}
                            content={'<p>Once we have a clear picture of the market you’re in, we’ll plan your journey into the limelight. We will create a media list that includes influential outlets in traditional and digital media who might be receptive to your brand’s story.</p>'}
                        />

                        <ProcessItem
                            thumbnail={BASE_URL + '/img/CulturallyConditioned/Getting-informed-and-aligned.png'}
                            title={'Getting informed and aligned'}
                            content={'<p>We begin with a kick-off to acquaint our team with your brand and aligns stakeholders on goals and objectives. We want to get a sense of who your brand is and how the public perceives it – and how those two may differ.</p>'}
                        />

                        <ProcessItem
                            thumbnail={BASE_URL + '/img/CulturallyConditioned/Industry-Analysis.png'}
                            title={'Industry and Competitor Analysis + Social Listening'}
                            content={'<p>Our team dives into your industry trends, notable past successes and competitor positioning. We use social listening tools to determine brand perception.</p>'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CulturallyConditioned