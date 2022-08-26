import React, { useEffect, useState, useRef } from 'react'
import './IndustrySingle.css'
import { API_BASE_URL, BASE_URL } from '../../../config'
import { Link, useParams } from 'react-router-dom'
import { GetInvolved } from '../../ServiceInsights/GetInvolved'
import { ServicesAskQuote } from '../../ServicesAskQuote/ServicesAskQuote'
import AOS from "aos"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function IndustrySingle() {

    const ElementRef = useRef('.industry-single-desc')
    const params = useParams();
    const [singleIndustry, setSingleIndustry] = useState([]);
    const [services, setServices] = useState([]);
    const [insights, setInsights] = useState([]);

    // let timesRun = 0;

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getIndustryData(params.industry_slug);
        getServices()
        getInsights()

        /* let interval = setInterval(function () {
            timesRun += 1;
            const Elementcount = ElementRef.current.childNodes;

            if (timesRun === 1) {
                clearInterval(interval);

                let el = document.createElement('div');
                el.classList.add('text-success');

                el.innerHTML = `New div added done wow!`;

                Elementcount[5].parentNode.insertBefore(el, Elementcount[5].nextSibling);
            }
        }, 2000); */
    }, [params]);

    async function getIndustryData(slug) {
        let result = await fetch(`${API_BASE_URL}/single-industry-article/${slug}`);
        result = await result.json();
        setSingleIndustry(result);
    }

    async function getServices() {
        let result = await fetch(`${API_BASE_URL}/single-industry-services`);
        result = await result.json();
        setServices(result);
    }

    async function getInsights() {
        let result = await fetch(`${API_BASE_URL}/single-industry-insights`);
        result = await result.json();
        setInsights(result);
    }

    return (
        <div className='industry-single-page'>
            <HelmetProvider>
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
                                        <div className='col-lg-12'>
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
                                    </div>
                                </div>
                            </div>

                            <div className='industry-single-content'>
                                <div className='container-lg'>
                                    <div className='row industry-single-content-row'>
                                        <div className='col-lg-7'>
                                            {
                                                singleIndustry.title ?
                                                    <div className='industry-single-social'>
                                                        <div className="industry-single-social-title">Share</div>
                                                        <ul>
                                                            <li>
                                                                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${BASE_URL}/csuit/${singleIndustry.slug}&title=${singleIndustry.title}`} target="_blank"><i className="fa fa-linkedin"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href={`https://twitter.com/intent/tweet?url=${BASE_URL}/csuit/${singleIndustry.slug}&text=${singleIndustry.title}`} target="_blank"><i className="fa fa-twitter"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}/csuit/${singleIndustry.slug}&quote=${singleIndustry.title}`} target="_blank"><i className="fa fa-facebook-f"></i></a>
                                                            </li>
                                                            <li>
                                                                <a href={`mailto:info@corporality.global?subject=${singleIndustry.title}`} target="_blank"><i className="fa fa-envelope"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    : null
                                            }

                                            <div className='industry-single-desc' dangerouslySetInnerHTML={{ __html: singleIndustry.description }} ref={ElementRef}></div>

                                            <div className='industry-single-copyright'>
                                                <p>Copyright © 2022 Corporality Global. All rights reserved. Corporality and its logo are trademarks of Corporality Global.</p>
                                                <p>This content is provided for general information purposes and is not intended to be used in place of consultation with Corporality professional advisors. This article may refer to opinions owned by third parties. All such third-party marks are the property of their respective owners. No sponsorship, endorsement or approval of this content by the owners of such marks is intended, expressed or implied by Corporality.</p>
                                            </div>
                                        </div>

                                        <div id="industry-single-col-boxes" className='col-lg-5 industry-single-col-boxes'>
                                            <div id="industry-single-boxes" className='industry-single-boxes'>
                                                {
                                                    services && services.length > 0 ?
                                                        <div className='industry-single-box industry-single-related-box'>
                                                            <div className='is-box-title'>Services</div>
                                                            <ul>
                                                                {
                                                                    services.map((item) =>
                                                                        <li key={`${item.slug}`}>
                                                                            <Link to={`/article/${item.slug}`}>{item.title}</Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                        : null
                                                }

                                                {
                                                    insights && insights.length > 0 ?
                                                        <div className='industry-single-box industry-single-related-box'>
                                                            <div className='is-box-title'>Insights</div>
                                                            <ul>
                                                                {
                                                                    insights.map((item) =>
                                                                        <li key={`${item.slug}`}>
                                                                            <Link to={`/${item.slug}`}>{item.title}</Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            </ul>
                                                        </div>
                                                        : null
                                                }
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
            </HelmetProvider>
        </div>
    )
}

export default IndustrySingle