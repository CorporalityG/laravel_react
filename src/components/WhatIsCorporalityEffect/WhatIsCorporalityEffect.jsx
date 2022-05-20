import React from 'react'
import './WhatIsCorporalityEffect.css'
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import { FactorDrivingConclusionItem } from './FactorDrivingConclusionItem';
import { KeyElementItem } from './KeyElementItem';
import MetaTags from 'react-meta-tags';

function WhatIsCorporalityEffect() {

    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <>
            <MetaTags>
                <title>{`What is Corporality Effect? | Top Marketing Trends Online | Corporality Global`}</title>
                <meta name="description" content={`Corporality Effect is a business vision which will transform you into one of the most influential people in your industry. We leverage top marketing trends for your success.`} />
            </MetaTags>

            <div className="wice-banner-main">
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/banner-dots.png'} alt="What is Corporality Effect?" className="wice-banner-img" />

                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/rec-1.png'} alt="Rec 1" className="rec-1" />
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/rec-2.png'} alt="Rec 2" className="rec-2" />

                <div className="wice-banner-social-main">
                    <div className="wice-banner-social-img">
                        <img src={BASE_URL + '/img/WhatIsCorporalityEffect/social.png'} alt="Social" />
                    </div>
                    <div className="wice-banner-social-icon-main">
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://www.facebook.com/CorporalityG/")}>
                            <i className="fa fa-facebook-f"></i>
                        </div>
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://twitter.com/corporalityg/")}>
                            <i className="fa fa-twitter"></i>
                        </div>
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://www.instagram.com/corporalityg/")}>
                            <i className="fa fa-instagram"></i>
                        </div>
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://www.linkedin.com/company/corporalityg/")}>
                            <i className="fa fa-linkedin"></i>
                        </div>
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://in.pinterest.com/CorporalityG/_created/")}>
                            <i className="fa fa-pinterest"></i>
                        </div>
                        <div className="wice-banner-social-icon" onClick={() => window.open("https://www.youtube.com/channel/UC4EISt8kHI4zzpmbIBMIBbg")}>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>

                <div className="container-lg">
                    <div className="row wice-banner-content-row">
                        <div className="col-lg-12">
                            <div className="wice-banner-content">
                                <h1>What is Corporality Effect?</h1>
                                <p>Corporality Effect is a dimension-changing business vision which, when embraced fully, will transform you into one of the most influential people in your industry. Before beginning your journey, you must be obsessed with understanding the shifting market and emerging marketing strategies while searching for the answer to one question “How is your market trend?”</p>
                                <p>You must be thinking, What can Corporality Effect do for my business?</p>
                                <p>Any marketing move should create visible gains to make it a sound investment. With Corporality Effect, you can reshape your business to a perfect competitive fit.</p>

                                <div className="wice-banner-btn-main">
                                    <Link className="wice-banner-btn" to="/" onClick={() => { topHandle() }} >Why Corporality</Link>
                                    <Link className="wice-banner-btn" to="/" onClick={() => { topHandle() }} >Training Request</Link>
                                </div>
                            </div>
                        </div>

                        <div className="wice-banner-phone">
                            <img src={BASE_URL + '/img/WhatIsCorporalityEffect/phone-icon.png'} alt="Phone" className="phone-icon" onClick={() => window.open("tel:61283794089", "_self")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="wice-factor-section">
                <div className="container-lg">
                    <div className="row wice-factor-content-row">
                        <div className="col-lg-6">
                            <div className="wice-factor-content">
                                <h2>Factor driving conclusion</h2>
                                <p>Over the last decade, we have seen the dramatic shift in marketing across all industries and how buyers make their purchasing decisions. Book your 15 min discovery session</p>
                                <Link className="wice-factor-btn" to="/">Explore</Link>
                                <p>Now, it is not a secret that everyone heads to the internet to educate themselves before making a purchase. Market leaders stumbled onto the need to shift and started working on Inbound Shifting.</p>
                                <p><b>They realised that marketing is going to make a swift shift towards Digital Media Marketing. Through their futuristic approach, they pivoted aggressively towards it.</b></p>
                                <p>Consumers tend to be 70% convinced on purchasing a product even before making a direct inquiry. Their buying decision heightens when they are impressed by a company’s technological advancements.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="wice-factor-img">
                                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/factor-driving-conclusion.png'} alt="Factor driving conclusion" />
                            </div>
                        </div>
                    </div>

                    <div className="row wice-factor-boxes-row">
                        <FactorDrivingConclusionItem
                            title={'Strategic Consultancy'}
                            content={'<p>Consumers are now up for something new. Companies will hardly meet this if silo mentality is not put to a stop. Still, many companies equate marketing as a mere expense.</p>'}
                        />

                        <FactorDrivingConclusionItem
                            title={'So where does it leave you?'}
                            content={'<p>See who your competitors are and who leads. Know who is keeping your money. The only choice you have is to use a strategy built on predatory marketing!</p>'}
                        />
                    </div>
                </div>
            </div>

            <div className="wice-origin-section">
                <div className="container-lg">
                    <div className="row wice-origin-row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="wice-origin-content">
                                <h2>Origin of Corporality Effect and its Framework</h2>
                                <p>Corporality believes that the key to a company’s success is through a collective team effort where each member responsibly takes on tasks and continuously align themselves to a common goal.</p>
                                <p><span>CORPORALITY EFFECT</span> came to light because of the struggles of business owners and leaders concerning the silo mindset that creates hurdles in their success.</p>
                                <p>If immersive technologies are going to fuel your growth, you need an industry expert like us who can accurately and efficiently determine whether a concept is a true product-market fit.</p>
                                <p>We believe business is not about being B2B or B2C – instead, it is Human-to-Human.</p>

                                <div className="wice-que-title">Are you organised well enough to understand the direction you are led to?</div>
                                <p>Becoming an industry thought leader is an outcome of decades of experience in processes and strategies with consistent and contextual relevance.</p>
                                <p>When Priya Mishra started Corporality, she realised that as one keeps chasing a business, he may win or lose it along the way. It isn’t Corporality’ failure nor the customer’s, but a failure of the framework and mindset.</p>
                                <p>So she decided to educate entrepreneurs and created a structured framework through Corporality Effect.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wice-effective-section">
                <div className="container-lg">
                    <div className="row wice-effective-row">
                        <img src={BASE_URL + '/img/WhatIsCorporalityEffect/effective-bg.png'} alt="Why is this effective?" className="wice-effective-img" />

                        <div className="col-lg-12 wice-effective-col">
                            <div className="wice-effective-content">
                                <h2>Why is this effective?</h2>
                                <p>We want to set the mood for you as we go along improving your marketing strategies, whether you have a team or are a solopreneur. The overall business model, goals, and vision need to be identified. Cooperative team members shall form part of an employer’s priorities to turn vision into success.</p>
                                <p>A sound mind is receptive and collaborative. The best strategies for your brand are best made by the people behind it.</p>
                                <p>We are here to become the best support for clients who choose to trust us.</p>
                                <p>And so we are inspired to let you experience CORPORALITY EFFECT – it simply resonates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wice-marketing-section">
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-vector.png'} alt="marketing-vector" className="marketing-vector" />
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-1.png'} alt="marketing-rec-1" className="marketing-rec-1" />
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-2.png'} alt="marketing-rec-2" className="marketing-rec-2" />
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-3.png'} alt="marketing-rec-3" className="marketing-rec-3" />
                <img src={BASE_URL + '/img/WhatIsCorporalityEffect/marketing-rec-4.png'} alt="marketing-rec-4" className="marketing-rec-4" />

                <div className="container-lg">
                    <div className="row wice-marketing-row">
                        <div className="col-lg-12">
                            <div className="wice-marketing-content">
                                <div className="wice-marketing-heading">
                                    <h2>Wondering how to maximise your profitability?</h2>
                                    <h2>your next step should start with the corporality marketing journey</h2>
                                </div>
                                <div className="wice-marketing-subtitle">Increasing sales is one thing…</div>
                                <p>Is your business stagnant or struggling? Gauge your brand’s strategy with this in-depth analysis program that can reveal the path to advancing your business to the next level with effective basic marketing practices.</p>
                                <p>What to know more why you should explore more about CORPORALITY EFFECT FRAMEWORK?</p>
                                <Link className="wice-marketing-btn" to="/">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wice-key-elements-section">
                <div className="container-lg">
                    <div className="row wice-ke-title-row">
                        <div className="col-lg-12">
                            <h2>5 Key Elements of Corporality Effect Framework</h2>
                        </div>
                    </div>

                    <div className="row wice-ke-boxes-row">
                        <KeyElementItem
                            thumbnail={BASE_URL + '/img/WhatIsCorporalityEffect/Marketing-Trust.png'}
                            title={'Marketing vs Trust'}
                        />

                        <KeyElementItem
                            thumbnail={BASE_URL + '/img/WhatIsCorporalityEffect/Inbound-Marketing-Strategy.png'}
                            title={'Inbound Marketing Strategy'}
                        />

                        <KeyElementItem
                            thumbnail={BASE_URL + '/img/WhatIsCorporalityEffect/Digital-Impact.png'}
                            title={'Digital Impact'}
                        />

                        <KeyElementItem
                            thumbnail={BASE_URL + '/img/WhatIsCorporalityEffect/Business-Planning-and-Vision.png'}
                            title={'Business Planning and Vision'}
                        />

                        <KeyElementItem
                            thumbnail={BASE_URL + '/img/WhatIsCorporalityEffect/Customer-Experience.png'}
                            title={'Customer Experience'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatIsCorporalityEffect