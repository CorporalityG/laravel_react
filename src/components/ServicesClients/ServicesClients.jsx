import React, { useEffect, useState } from 'react'
import './ServicesClients.css'
import Carousel from 'react-bootstrap/Carousel'
import { ClientWorkItem } from "./ClientWorkItem";
import { useNavigate } from "react-router"
import { API_BASE_URL, API_IMG_URL } from '../../config'

function ServicesClients() {

    const section_slug = 'client-section';

    const totalSlide = '04';
    const [index, setIndex] = useState(0);

    const [pageSectionDetail, setPageSectionDetail] = useState([]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        getPageSectionDetail()
    }, []);

    async function getPageSectionDetail() {
        let result = await fetch(`${API_BASE_URL}/page-detail/${section_slug}`);
        result = await result.json();
        setPageSectionDetail(result);
    }

    return (
        <>
            <div className="clients-work-section">
                {
                    pageSectionDetail.detail ?
                        <div className="container-lg">
                            <div className="row clients-work-row">
                                <div className="col-lg-12">
                                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                                        <Carousel.Item>
                                            <ClientWorkItem
                                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_1_image}`}
                                                clientName={`${pageSectionDetail.detail.client_1_name}`}
                                                title={`${pageSectionDetail.detail.client_1_title}`}
                                                subtitle={`<p>${pageSectionDetail.detail.client_1_subtitle ?? ''}</p>`}
                                                studiesImg={`${API_IMG_URL}/pages/${pageSectionDetail.detail.client_1_studies_image}`}
                                                studiesTitle={`${pageSectionDetail.detail.client_1_studies_title}`}
                                                studiesSubTitle={`${pageSectionDetail.detail.client_1_studies_subtitle}`}
                                                studiesBtnText={`${pageSectionDetail.detail.client_1_studies_btn_text}`}
                                                studiesBtnLink={`${pageSectionDetail.detail.client_1_studies_btn_link}`}
                                                offeringTitle={`${pageSectionDetail.detail.client_1_offering_title}`}
                                                offeringDescription={`<p>${pageSectionDetail.detail.client_1_offering_description}</p>`}
                                                offeringBtnText={`${pageSectionDetail.detail.client_1_offering_btn_text}`}
                                                offeringBtnLink={`${pageSectionDetail.detail.client_1_offering_btn_link}`}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item data-aos="zoom-in">
                                            <ClientWorkItem
                                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_2_image}`}
                                                clientName={`${pageSectionDetail.detail.client_2_name}`}
                                                title={`${pageSectionDetail.detail.client_2_title}`}
                                                subtitle={`<p>${pageSectionDetail.detail.client_2_subtitle ?? ''}</p>`}
                                                studiesImg={`${API_IMG_URL}/pages/${pageSectionDetail.detail.client_2_studies_image}`}
                                                studiesTitle={`${pageSectionDetail.detail.client_2_studies_title}`}
                                                studiesSubTitle={`${pageSectionDetail.detail.client_2_studies_subtitle}`}
                                                studiesBtnText={`${pageSectionDetail.detail.client_2_studies_btn_text}`}
                                                studiesBtnLink={`${pageSectionDetail.detail.client_2_studies_btn_link}`}
                                                offeringTitle={`${pageSectionDetail.detail.client_2_offering_title}`}
                                                offeringDescription={`<p>${pageSectionDetail.detail.client_2_offering_description}</p>`}
                                                offeringBtnText={`${pageSectionDetail.detail.client_2_offering_btn_text}`}
                                                offeringBtnLink={`${pageSectionDetail.detail.client_2_offering_btn_link}`}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item data-aos="zoom-in">
                                            <ClientWorkItem
                                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_3_image}`}
                                                clientName={`${pageSectionDetail.detail.client_3_name}`}
                                                title={`${pageSectionDetail.detail.client_3_title}`}
                                                subtitle={`<p>${pageSectionDetail.detail.client_3_subtitle ?? ''}</p>`}
                                                studiesImg={`${API_IMG_URL}/pages/${pageSectionDetail.detail.client_3_studies_image}`}
                                                studiesTitle={`${pageSectionDetail.detail.client_3_studies_title}`}
                                                studiesSubTitle={`${pageSectionDetail.detail.client_3_studies_subtitle}`}
                                                studiesBtnText={`${pageSectionDetail.detail.client_3_studies_btn_text}`}
                                                studiesBtnLink={`${pageSectionDetail.detail.client_3_studies_btn_link}`}
                                                offeringTitle={`${pageSectionDetail.detail.client_3_offering_title}`}
                                                offeringDescription={`<p>${pageSectionDetail.detail.client_3_offering_description}</p>`}
                                                offeringBtnText={`${pageSectionDetail.detail.client_3_offering_btn_text}`}
                                                offeringBtnLink={`${pageSectionDetail.detail.client_3_offering_btn_link}`}
                                            />
                                        </Carousel.Item>

                                        <Carousel.Item data-aos="zoom-in">
                                            <ClientWorkItem
                                                thumbnail={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_4_image}`}
                                                clientName={`${pageSectionDetail.detail.client_4_name}`}
                                                title={`${pageSectionDetail.detail.client_4_title}`}
                                                subtitle={`<p>${pageSectionDetail.detail.client_4_subtitle ?? ''}</p>`}
                                                studiesImg={`${API_IMG_URL}/pages/${pageSectionDetail.detail.client_4_studies_image}`}
                                                studiesTitle={`${pageSectionDetail.detail.client_4_studies_title}`}
                                                studiesSubTitle={`${pageSectionDetail.detail.client_4_studies_subtitle}`}
                                                studiesBtnText={`${pageSectionDetail.detail.client_4_studies_btn_text}`}
                                                studiesBtnLink={`${pageSectionDetail.detail.client_4_studies_btn_link}`}
                                                offeringTitle={`${pageSectionDetail.detail.client_4_offering_title}`}
                                                offeringDescription={`<p>${pageSectionDetail.detail.client_4_offering_description}</p>`}
                                                offeringBtnText={`${pageSectionDetail.detail.client_4_offering_btn_text}`}
                                                offeringBtnLink={`${pageSectionDetail.detail.client_4_offering_btn_link}`}
                                            />
                                        </Carousel.Item>

                                    </Carousel>

                                    <div className="clients-work-count" data-aos="fade-up" data-aos-delay="400">
                                        <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
                                    </div>

                                    <div className="clients-work-btn" data-aos="fade-up" data-aos-delay="500"><span className="clients-work-view-all" onClick={() => { navigate("/clients"); topHandle(); }}>View All Clients</span></div>
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        </>
    )
}

export default ServicesClients