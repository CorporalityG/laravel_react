import React, { useEffect, useState } from 'react'
import './IndustrySingle.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config'
import { Link, useParams } from 'react-router-dom'
import { OtherIndustryItem } from './OtherIndustryItem'
import { GetInvolved } from '../../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../../ServicesAskQuote/ServicesAskQuote'
import AOS from "aos"
import { Helmet } from "react-helmet";

function IndustrySingle() {

    const params = useParams();
    const [singleIndustry, setSingleIndustry] = useState([]);
    const [singleRelatedIndustry, setSingleRelatedIndustry] = useState([]);

    const [colPosition, setColPosition] = useState('relative');
    const [colTop, setColTop] = useState('0');
    const [colWidth, setColWidth] = useState('auto');

    const handleScroll = () => {
        const position = window.pageYOffset;
        const { innerWidth: windowInnerwidth } = window;

        const colSingleBoxWidth = document.getElementById('industry-single-boxes').clientWidth;
        const colOffsetTop = document.getElementById( "industry-single-col-boxes" ).offsetTop;
        const colOffsetHeight = document.getElementById( "industry-single-col-boxes" ).offsetHeight;

        setColPosition('relative')
        setColTop('0')
        setColWidth('auto')

        if (windowInnerwidth > 991) {
            if (position > colOffsetHeight) {
                console.log('here')
                setColPosition('relative')
                setColTop('0')
                setColWidth('auto')
            }
            else if (position > colOffsetTop) {
                setColPosition('fixed')
                setColTop('90px')
                setColWidth(colSingleBoxWidth)
            }
        }
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

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
                        <Helmet>
                            <title>{singleIndustry.meta_title ?? singleIndustry.title}</title>
                            {singleIndustry.meta_description && <meta name="description" content={singleIndustry.meta_description} />}
                            {singleIndustry.meta_keywords && <meta name="keywords" content={singleIndustry.meta_keywords} />}
                            <link rel="canonical" href={`${BASE_URL}/${singleIndustry.slug}/`} />
                        </Helmet>

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

                                    <div id="industry-single-col-boxes" className='col-lg-5 industry-single-col-boxes'>
                                        <div className='industry-single-survey-box'>
                                            <div className='survey-title'>Survey</div>
                                        </div>

                                        <div id="industry-single-boxes" className='industry-single-boxes' style={{ 'position': colPosition, 'top': colTop, 'width': colWidth }}>
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
                                                        category={`Agrotech / Agriculture`}
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
                                                        category={`Fintech / Finance`}
                                                        slug={`fintech`}
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