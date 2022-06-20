import React, { useEffect, useState } from 'react'
import './IndustrySingle.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config'
import { Link, useParams } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../../ServicesAskQuote/ServicesAskQuote'
import AOS from "aos"

function IndustrySingle() {

    const params = useParams();
    const [singleIndustry, setSingleIndustry] = useState([]);
    const [singleRelatedIndustry, setSingleRelatedIndustry] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getIndustryData(params.industry_slug);
        getRelatedIndustryData(params.industry_slug)
    }, [params]);

    async function getIndustryData(slug) {
        let result = await fetch(`${API_BASE_URL}/single-industry-article/${slug}`);
        result = await result.json();
        setSingleIndustry(result);
    }

    async function getRelatedIndustryData(slug) {
        let result = await fetch(`${API_BASE_URL}/single-realted-industrial-article/${slug}`);
        result = await result.json();
        setSingleRelatedIndustry(result);
    }

    return (
        <div className='industry-single-page'>
            {
                singleIndustry ?
                    <>
                        <div className='industry-single-banner'>
                            <div className='container-lg'>
                                <div className='row industry-single-banner-row'>
                                    <div className='col-lg-6'>
                                        <div className='industry-single-banner-content'>
                                            {
                                                singleIndustry.categories ?
                                                    <div className='industry-single-banner-cat'>
                                                        {
                                                            singleIndustry.categories.map((item) =>
                                                                <span key={`${item.id}`}>{item.category_name} Industry</span>
                                                            )
                                                        }</div>
                                                    : null
                                            }
                                            <h1>{singleIndustry.title}</h1>
                                            <div className='industry-single-banner-date'>{singleIndustry.date_created_at}</div>
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className='industry-single-banner-img'>
                                            {singleIndustry.image && <img src={`${API_IMG_URL + singleIndustry.image}`} alt={`${singleIndustry.title}`} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='industry-single-content'>
                            <div className='container-lg'>
                                <div className='row industry-single-content-row'>
                                    <div className='col-lg-7'>
                                        <div className='industry-single-desc' dangerouslySetInnerHTML={{ __html: singleIndustry.description }}></div>
                                    </div>

                                    <div className='col-lg-5 industry-single-col-boxes'>
                                        <div className='industry-single-survey-box'>
                                            <div className='survey-title'>Survey</div>
                                        </div>

                                        <div className='industry-single-boxes'>
                                            {
                                                singleRelatedIndustry ?
                                                    <div className='industry-single-box industry-single-related-box'>
                                                        <div className='is-box-title'>Read the related blog</div>
                                                        <ul>
                                                            {
                                                                singleRelatedIndustry.map((item) =>
                                                                    <li key={`${item.id}`}>
                                                                        <Link to={`/industry/${item.slug}`}>{item.title}</Link>
                                                                    </li>
                                                                )
                                                            }
                                                        </ul>
                                                    </div>
                                                    : null
                                            }

                                            <div className='industry-single-box industry-single-other-box'>
                                                <div className='is-box-title'>Other Industries</div>

                                                <div className='row industry-single-other-industries-row'>
                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/nanotech.png`}
                                                        category={`Nanotech`}
                                                        slug={`nanotech`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/construction.png`}
                                                        category={`Construction`}
                                                        slug={`construction`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/metal-industry.png`}
                                                        category={`Metal Industry`}
                                                        slug={`metal`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/agriculture.png`}
                                                        category={`Agriculture`}
                                                        slug={`agriculture`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/hightech.png`}
                                                        category={`Hightech`}
                                                        slug={`high-tech`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/geospatial.png`}
                                                        category={`Geospatial`}
                                                        slug={`geospatial`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/finance.png`}
                                                        category={`Finance`}
                                                        slug={`finance`}
                                                    />

                                                    <OtherIndustryItem
                                                        icon={`${BASE_URL}/img/industries/manufacturing.png`}
                                                        category={`Manufacturing`}
                                                        slug={`manufacturing`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }

            <GetInvolved />

            <ServicesAskQuote />
        </div>
    )
}

export default IndustrySingle