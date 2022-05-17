import React, { useEffect, useState } from 'react'
import './SingleArticle.css'
import { API_BASE_URL, API_IMG_URL } from '../../config';
import { useParams } from 'react-router-dom'
import { SocialShare } from './SocialShare';

function SingleArticle() {

    const params = useParams();
    const [singleArticle, setSingleArticle] = useState([]);

    useEffect(() => {
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
                        <div className="sa-banner-section" style={{ backgroundImage: `linear-gradient(180deg,hsla(0, 0%, 100%, .4),hsla(0, 0%, 100%, .4)), url(${singleArticle.article_image !== undefined ? API_IMG_URL + singleArticle.article_image : ''})` }}>
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
                                                                <a key={`${item.id}`} href={`#${item.section_slug}`} data-id={`${item.section_slug}`} className='sa-sidebar-link'>Start Reading</a>
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
                                        <div id='sa-sidebar' className='sa-sidebar'>
                                            {
                                                singleArticle.sections ?
                                                    <>
                                                        <div className='sa-sidebar-title'>Tags</div>
                                                        <div className='sa-sidebar-nav'>
                                                            {
                                                                singleArticle.sections.map((item) =>
                                                                    <a key={`${item.id}`} href={`#${item.section_slug}`} data-id={`${item.section_slug}`} className='sa-sidebar-link'>{`${item.section_title}`}</a>
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
        </div>
    )
}

export default SingleArticle