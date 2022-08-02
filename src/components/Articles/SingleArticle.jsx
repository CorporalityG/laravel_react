import React, { useEffect, useState } from 'react'
import './SingleArticle.css'
import { API_BASE_URL } from '../../config';
import { useParams } from 'react-router-dom'
import { SocialShare } from './SocialShare';
import { ServicesAskQuote } from '../ServicesAskQuote/ServicesAskQuote';
import AOS from "aos";

function SingleArticle() {

    const params = useParams();
    const [singleArticle, setSingleArticle] = useState([]);

    const [colPosition, setColPosition] = useState('relative');
    const [colTop, setColTop] = useState('0');
    const [colWidth, setColWidth] = useState('auto');

    const handleScroll = () => {
        const position = window.pageYOffset;
        const { innerWidth: windowInnerwidth } = window;
        const bannerHeight = document.getElementById('sa-banner-section').clientHeight;
        const colSidebarHeight = document.getElementById('sa-sidebar-col').clientHeight
        const sidebarWidth = document.getElementById('sa-sidebar').clientWidth;

        setColPosition('relative')
        setColTop('0')
        setColWidth('auto')

        if (windowInnerwidth > 767) {
            if (position > (colSidebarHeight + 90)) {
                setColPosition('relative')
                setColTop('0')
                setColWidth('auto')
            }
            else if (position > bannerHeight) {
                setColPosition('fixed')
                setColTop('90px')
                setColWidth(sidebarWidth)
            }
        }
    };

    const linkHandleScroll = (sectionSlug) => {
        document.getElementById(sectionSlug).style.paddingTop = "90px";
    }

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        getArticle(params.article_slug);
    }, [params])

    async function getArticle(slug) {
        let result = await fetch(`${API_BASE_URL}/single-article/${slug}`);
        result = await result.json();
        setSingleArticle(result);
    }

    return (
        <div className="single-article-page">
            {
                singleArticle ?
                    <>
                        <div id='sa-banner-section' className="sa-banner-section">
                            <div className="container-lg">
                                <div className='row sa-banner-row'>
                                    <div className='col-lg-6'>
                                        <h1>{singleArticle.article_title}</h1>
                                        <div className='sa-banner-subtitle'>{singleArticle.article_subtitle}</div>

                                        <SocialShare />

                                        <div className='sa-banner-btn'>
                                            {
                                                singleArticle.sections ?
                                                    <>
                                                        {
                                                            singleArticle.sections.slice(0, 1).map((item) =>
                                                                <a key={`${item.id}`} href={`#${item.section_slug}`} data-id={`${item.section_slug}`} className='sa-sidebar-link' onClick={()=>linkHandleScroll(item.section_slug)}>Start Reading</a>
                                                            )
                                                        }
                                                    </>
                                                    : null
                                            }
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div className='sa-banner-content' dangerouslySetInnerHTML={{ __html: singleArticle.article_short_description }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='sa-content'>
                            <div className='container-lg'>
                                <div className='row'>
                                    <div id='sa-sidebar-col' className='col-lg-3 col-md-4'>
                                        <div id='sa-sidebar' className='sa-sidebar' style={{ 'position': colPosition, 'top': colTop, 'width': colWidth }}>
                                            {
                                                singleArticle.sections ?
                                                    <>
                                                        <div className='sa-sidebar-title'>Tags</div>
                                                        <div className='sa-sidebar-nav'>
                                                            {
                                                                singleArticle.sections.map((item) =>
                                                                    <a key={`${item.id}`} href={`#${item.section_slug}`} data-id={`${item.section_slug}`} className='sa-sidebar-link' onClick={()=>linkHandleScroll(item.section_slug)}>{`${item.section_title}`}</a>
                                                                )
                                                            }
                                                        </div>
                                                    </>
                                                    : null
                                            }

                                            <SocialShare />
                                        </div>
                                    </div>

                                    <div className='col-lg-9 col-md-8'>
                                        {
                                            singleArticle.sections ?
                                                <>
                                                    {
                                                        singleArticle.sections.map((item) =>
                                                            <section key={`${item.id}`} id={`${item.section_slug}`} className='sa-section' dangerouslySetInnerHTML={{ __html: item.section_description }}></section>
                                                        )
                                                    }
                                                </>
                                                : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : null
            }

            <ServicesAskQuote />
        </div>
    )
}

export default SingleArticle