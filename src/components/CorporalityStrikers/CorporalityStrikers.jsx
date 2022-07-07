import React, { useEffect, useState } from 'react'
import './CorporalityStrikers.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config'
import { CorporalityStrikerItem } from './CorporalityStrikerItem'
import ServicesClients from "../ServicesClients/ServicesClients";
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import { Helmet } from "react-helmet";
import AOS from "aos";

function CorporalityStrikers() {

    const page_slug = 'corporality-striker';

    const [pageDetail, setPageDetail] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });

        getPageDetail()
    }, []);

    async function getPageDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${page_slug}`);
        result = await result.json();
        setPageDetail(result);
    }

    return (
        <div className='corporality-striker'>
            <Helmet>
                {pageDetail.meta_title && <title>{`${pageDetail.meta_title}`}</title>}
                {pageDetail.meta_description && <meta name="description" content={`${pageDetail.meta_description}`} />}
                {pageDetail.meta_keywords && <meta name="keywords" content={pageDetail.meta_keywords} />}
                <link rel="canonical" href={`${BASE_URL}/corporality-striker/`} />
            </Helmet>

            {
                pageDetail.detail ?
                    <>
                        <div className='corporality-striker-banner-section'>
                            <img src={`${BASE_URL}/img/CorporalityStrikers/banner-vector.png`} alt="Vector" className='cs-banner-vector' />
                            <div className='cs-banner-bg-white'></div>

                            <div className='container-lg'>
                                <div className='row cs-banner-row'>
                                    <div className='col-lg-7'>
                                        <div className='cs-banner-content'>
                                            <h1>{`${pageDetail.detail.banner_title}`}</h1>
                                            <p>{`${pageDetail.detail.banner_title}`}</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-5'>
                                        <div className='cs-banner-image'>
                                            <img src={`${API_IMG_URL}pages/${pageDetail.detail.banner_image}`} alt={`${pageDetail.detail.banner_title}`} className='cs-banner-img' />

                                            <img src={`${BASE_URL}/img/CorporalityStrikers/banner-circle-yellow.png`} alt="circle-yellow" className='cs-banner-circle-yellow' />
                                            <img src={`${BASE_URL}/img/CorporalityStrikers/banner-circle-purple.png`} alt="circle-purple" className='cs-banner-circle-purple' />
                                            <img src={`${BASE_URL}/img/CorporalityStrikers/banner-dots.png`} alt="dots" className='cs-banner-dots' />
                                            <img src={`${BASE_URL}/img/CorporalityStrikers/banner-ellipse.png`} alt="ellipse" className='cs-banner-ellipse' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='corporality-striker-list-section'>
                            <div className='container-fluid px-0'>
                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_1_image}`}
                                    title={`${pageDetail.detail.striker_item_1_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_1_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_1_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_1_btn_link}`}
                                />

                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_2_image}`}
                                    title={`${pageDetail.detail.striker_item_2_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_2_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_2_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_2_btn_link}`}
                                />

                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_3_image}`}
                                    title={`${pageDetail.detail.striker_item_3_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_3_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_3_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_3_btn_link}`}
                                />

                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_4_image}`}
                                    title={`${pageDetail.detail.striker_item_4_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_4_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_4_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_4_btn_link}`}
                                />

                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_5_image}`}
                                    title={`${pageDetail.detail.striker_item_5_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_5_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_5_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_5_btn_link}`}
                                />

                                <CorporalityStrikerItem
                                    thumbnail={`${API_IMG_URL}pages/${pageDetail.detail.striker_item_6_image}`}
                                    title={`${pageDetail.detail.striker_item_6_title}`}
                                    description={`<p>${pageDetail.detail.striker_item_6_description}</p>`}
                                    btnText={`${pageDetail.detail.striker_item_6_btn_text}`}
                                    btnLink={`${pageDetail.detail.striker_item_6_btn_link}`}
                                />
                            </div>
                        </div>
                    </>
                    : null
            }

            <ServicesClients />

            <GetInvolved />

        </div>
    )
}

export default CorporalityStrikers