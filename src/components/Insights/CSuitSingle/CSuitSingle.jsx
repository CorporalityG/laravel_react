import React, { useEffect, useState } from 'react'
import './CSuitSingle.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config'
import { useParams, Link } from 'react-router-dom'

function CSuitSingle() {

    const params = useParams();
    const [singleCSuit, setSingleCSuit] = useState([]);

    useEffect(() => {
        getCSuit(params.csuit_slug);
    }, [params])

    async function getCSuit(slug) {
        let result = await fetch(`${API_BASE_URL}/single-csuit/${slug}`);
        result = await result.json();
        setSingleCSuit(result);
    }

    return (

        <div className='csuit-single-page'>
            {
                singleCSuit ?
                    <>
                        <div className='csuit-single-banner'>
                            <div className='container-lg'>
                                <div className='row'>
                                    <div className='col-lg-8 offset-lg-2 col-sm-10 offset-sm-1'>
                                        <div className='csuit-single-banner-content'>
                                            {singleCSuit.image && <img src={`${API_IMG_URL + singleCSuit.image}`} alt={`${singleCSuit.title}`} className='csuit-single-banner-img' />}

                                            <div className='csuit-single-breadcrumbs'>
                                                {
                                                    singleCSuit.subcategories ?
                                                        <ul>
                                                            {
                                                                singleCSuit.subcategories.map((item) =>
                                                                    <li key={`${item.id}`}>
                                                                        <Link to={`/csuit/category/${item.category_slug}`}>{item.category_name}</Link>
                                                                    </li>
                                                                )
                                                            }
                                                        </ul>
                                                        : null
                                                }
                                            </div>

                                            <h1>{singleCSuit.title}</h1>

                                            <div className='csuit-single-date'>{`${singleCSuit.date_created_at}`}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {
                            singleCSuit.title ?
                                <div className="csuit-single-social-share">
                                    <div className="csuit-single-ss-title">SHARE</div>
                                    <ul>
                                        <li>
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${BASE_URL}/csuit/${singleCSuit.slug}&quote=${singleCSuit.title}`} target="_blank"><i className="fa fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href={`https://twitter.com/intent/tweet?url=${BASE_URL}/csuit/${singleCSuit.slug}&text=${singleCSuit.title}`} target="_blank"><i className="fa fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${BASE_URL}/csuit/${singleCSuit.slug}&title=${singleCSuit.title}`} target="_blank"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href={`http://pinterest.com/pin/create/link/?url=${BASE_URL}/csuit/${singleCSuit.slug}`} target="_blank"><i className="fa fa-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                : null
                        }

                        <div className='csuit-single-content'>
                            <div className='container-lg'>
                                <div className='row'>
                                    <div className='col-lg-8 offset-lg-2 col-sm-10 offset-sm-1'>
                                        <div className='csuit-single-description' dangerouslySetInnerHTML={{ __html: singleCSuit.description }}>
                                        </div>
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

export default CSuitSingle