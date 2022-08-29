import React, { useEffect, useState, useRef } from 'react'
import './IndustrySingle.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config'
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
    const [relatedRandomIndustries, setRelatedRandomIndustries] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getIndustryData(params.industry_slug);
        getServices()
        getInsights()
        getRelatedRandomIndustries(params.industry_slug)
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

    async function getRelatedRandomIndustries(slug) {
        let result = await fetch(`${API_BASE_URL}/single-realted-random-industrial-article/${slug}`);
        result = await result.json();
        setRelatedRandomIndustries(result);
    }

    if (relatedRandomIndustries.length > 0) {
        let interval = setInterval(function () {
            var removeElement1 = document.querySelector('.related-random-industry-1');
            if (removeElement1) {
                removeElement1.parentNode.removeChild(removeElement1);
            }

            var removeElement2 = document.querySelector('.related-random-industry-2');
            if (removeElement2) {
                removeElement2.parentNode.removeChild(removeElement2);
            }

            clearInterval(interval);
            const ElementCount = ElementRef.current.childNodes;

            // first element start
            let createEl1 = document.createElement('div');
            createEl1.classList.add('related-random-industry');
            createEl1.classList.add('related-random-industry-1');

            createEl1.innerHTML = `<div class="row related-random-industry-row">
                    <div class="col-sm-3">
                        <a href="/industry/${relatedRandomIndustries[0].slug}"><img src="${API_IMG_URL}${relatedRandomIndustries[0].image}" alt="${relatedRandomIndustries[0].title}" class="related-random-industry-img" /></a>
                    </div>
                    <div class="col-sm-9">
                        <a href="/industry/${relatedRandomIndustries[0].slug}" class="related-random-industry-title">${relatedRandomIndustries[0].title}</a>
                        <a href="/industry/${relatedRandomIndustries[0].slug}" class="related-random-industry-read-more">Read more <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></a>
                    </div>
                </div>`;

            let bEl1 = Math.ceil(ElementCount.length / 3)
            ElementCount[bEl1].parentNode.insertBefore(createEl1, ElementCount[bEl1].nextSibling);

            // second element start
            let createEl2 = document.createElement('div');
            createEl2.classList.add('related-random-industry');
            createEl2.classList.add('related-random-industry-2');

            createEl2.innerHTML = `<div class="row related-random-industry-row">
                        <div class="col-sm-3">
                            <a href="/industry/${relatedRandomIndustries[1].slug}"><img src="${API_IMG_URL}${relatedRandomIndustries[1].image}" alt="${relatedRandomIndustries[1].title}" class="related-random-industry-img" /></a>
                        </div>
                        <div class="col-sm-9">
                            <a href="/industry/${relatedRandomIndustries[1].slug}" class="related-random-industry-title">${relatedRandomIndustries[1].title}</a>
                            <a href="/industry/${relatedRandomIndustries[1].slug}" class="related-random-industry-read-more">Read more <svg viewBox="0 0 21 18" focusable="false" aria-hidden="true"><path d="M0.266478 8.99987C0.266478 9.33987 0.40148 9.66486 0.641486 9.90486C0.881493 10.1449 1.20648 10.2799 1.54648 10.2799L15.5852 10.2799L10.3814 15.1311C10.1189 15.3586 9.96136 15.6836 9.94261 16.0311C9.92511 16.3773 10.0489 16.7173 10.2864 16.9711C10.5239 17.2248 10.8538 17.3711 11.2014 17.3773C11.5488 17.3823 11.8839 17.2461 12.1288 16.9998L19.71 9.93741C19.9687 9.69491 20.1162 9.35616 20.1162 9.00115C20.1162 8.64614 19.9687 8.30739 19.71 8.0649L12.1289 0.999936C11.6113 0.51744 10.8014 0.544929 10.3189 1.06244C9.83637 1.57869 9.86511 2.38992 10.3814 2.87242L15.5852 7.71978L1.54648 7.71978C1.20648 7.71978 0.881492 7.85478 0.641492 8.09478C0.401492 8.33479 0.266482 8.65978 0.266482 8.99978L0.266478 8.99987Z"></path></svg></a>
                        </div>
                    </div>`;

            let bEl2 = Math.ceil(ElementCount.length / 1.5)
            ElementCount[bEl2].parentNode.insertBefore(createEl2, ElementCount[bEl2].nextSibling);
        }, 2000);
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

                                            {
                                                singleIndustry.title &&
                                                <div className='industry-single-copyright'>
                                                    <p>Copyright © 2022 Corporality Global. All rights reserved. Corporality and its logo are trademarks of Corporality Global.</p>
                                                    <p>This content is provided for general information purposes and is not intended to be used in place of consultation with Corporality professional advisors. This article may refer to opinions owned by third parties. All such third-party marks are the property of their respective owners. No sponsorship, endorsement or approval of this content by the owners of such marks is intended, expressed or implied by Corporality.</p>
                                                </div>
                                            }
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