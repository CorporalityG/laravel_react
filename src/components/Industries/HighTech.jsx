import React, { useEffect } from 'react'
import './industry.css'
import { BASE_URL } from '../../config'
import { ReseachPaperSurveyItem } from './ReseachPaperSurveyItem'
import { Link } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";

function HighTech() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <div className='industry-page high-tech-page'>
            <div className='industry-banner-section'>
                <img src={`${BASE_URL}/img/industries/industry-banner.png`} alt={`Industry Banner`} className="industry-banner-img" />

                <div className='industry-banner-content-main'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='industry-banner-content'>
                                    <h1>High Tech Industry</h1>
                                    <div className='industry-banner-desc'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien facilisi augue posuere fringilla. Sit dictum hac viverra ac urna. Accumsan vitae faucibus purus, ultrices consectetur aliquam duis massa arcu. Tellus in morbi massa at a neque, augue sed dapibus. Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                        <p>Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                        <p>Vitae dolor, commodo sit morbi purus. Porta ullamcorper non tortor mattis praesent mattis rutrum massa facilisis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-8 offset-lg-4'>
                                        <div className='industry-banner-ebook'>
                                            <div className='industry-banner-form'>Form</div>
                                            <div className='industry-banner-dwn'>
                                                <div className='industry-banner-dwn-title'>E book download</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row industry-banner-paper-survey-row'>
                                    <ReseachPaperSurveyItem
                                        title={`Reseach Paper`}
                                        slug={``}
                                    />

                                    <ReseachPaperSurveyItem
                                        title={`Survey`}
                                        slug={``}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-blog-name-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Blog Name</h2>
                        </div>

                        <div className='col-lg-6'>
                            <div className='industry-blog-name-desc'>
                                <p>When launching a new product or service, a go-to-market strategy is a tactical plan that contains and categorizes all of your activities to hit the target in a new market.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien facilisi augue posuere fringilla. Sit dictum hac viverra ac urna. Accumsan vitae faucibus purus, ultrices consectetur aliquam duis massa arcu. Tellus in morbi massa at a neque, augue sed dapibus.</p>
                                <p>Read the related blog</p>

                                <ul>
                                    <li>
                                        <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                    </li>
                                    <li>
                                        <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                    </li>
                                    <li>
                                        <Link to={`/`}>When launching a new product or service, a go-to-market strategy is a tactical plan that contains/</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <img src={`${BASE_URL}/img/industries/Blog-Name.png`} alt={`Blog Name`} className="blog-name-img" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='industry-other-industries-section'>
                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <h2>Other Industries</h2>
                        </div>
                    </div>

                    <div className='row industry-other-industries-row'>
                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/nanotech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/nanotech-hover.png`}
                            category={`Nanotech`}
                            slug={`nanotech`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/metal-industry.png`}
                            hoverIcon={`${BASE_URL}/img/industries/metal-industry-hover.png`}
                            category={`Metal Industry`}
                            slug={`metal`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/hightech.png`}
                            hoverIcon={`${BASE_URL}/img/industries/hightech-hover.png`}
                            category={`Hightech`}
                            slug={`high-tech`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/finance.png`}
                            hoverIcon={`${BASE_URL}/img/industries/finance-hover.png`}
                            category={`Finance`}
                            slug={`finance`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/construction.png`}
                            hoverIcon={`${BASE_URL}/img/industries/construction-hover.png`}
                            category={`Construction`}
                            slug={`construction`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/agriculture.png`}
                            hoverIcon={`${BASE_URL}/img/industries/agriculture-hover.png`}
                            category={`Agriculture`}
                            slug={`agriculture`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/geospatial.png`}
                            hoverIcon={`${BASE_URL}/img/industries/geospatial-hover.png`}
                            category={`Geospatial`}
                            slug={`geospatial`}
                        />

                        <OtherIndustryItem
                            icon={`${BASE_URL}/img/industries/manufacturing.png`}
                            hoverIcon={`${BASE_URL}/img/industries/manufacturing-hover.png`}
                            category={`Manufacturing`}
                            slug={`manufacturing`}
                        />
                    </div>
                </div>
            </div>

            <div className='industry-global-conference-section'>
                <img src={`${BASE_URL}/img/industries/global-conference-bg.png`} alt={`Global Conference`} className="industry-global-conference-banner-bg" />

                <div className='industry-global-conference-content-main'>
                    <div className='container-lg'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='industry-global-conference-content'>
                                    <p><span>Corporality Global</span> is organising its yearly conference in Sydney,</p>

                                    <p>For pricing and registration also of the 2022 event, check on </p>

                                    <a href='https://corporality.global/club/corporality-global-event/#Ticket' target="_blank">Register Now</a>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <div className='industry-global-conference-img'>
                                    <a href='https://corporality.global/club/corporality-global-event/#Ticket' target="_blank">
                                        <img src={`${BASE_URL}/img/industries/global-conference-banner.png`} alt={`Global Conference 2022`} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />

            <ServicesAskQuote />

        </div>
    )
}

export default HighTech