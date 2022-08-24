import React, { useEffect, useState } from 'react'
import { API_BASE_URL, API_IMG_URL } from '../../../config';
import "./Portfolio.css"
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router";
import axios from "axios";

const NewPortfolio = () => {

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

    const getPageSectionDetail = () => {
        axios.get(`${API_BASE_URL}/page-detail/${section_slug}`)
            .then(response => {
                setPageSectionDetail(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="portfolio-container">
            {
                pageSectionDetail.detail ?
                    <div className="container-lg">
                        <div className="row">
                            <div className="col-md-12">
                                <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={null} fade>
                                    <Carousel.Item>
                                        <div className="container-lg">
                                            <div className="row">
                                                <div className="col-md-4 portfolio-left">
                                                    <div className="portfolio-img-heading">
                                                        {pageSectionDetail.detail.client_1_image && <img className="portfolio-img" src={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_1_image}`} alt={`${pageSectionDetail.detail.client_1_name}`} />}
                                                        <h2 className="portfolio-heading">{`${pageSectionDetail.detail.client_1_name}`}</h2>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 portfolio-right">
                                                    <h3 className="portfolio-title">{`${pageSectionDetail.detail.client_1_title}`}</h3>
                                                    <div className="portfolio-content">
                                                        <p>{`${pageSectionDetail.detail.client_1_subtitle ?? ''}`}</p>
                                                    </div>
                                                    <div className="portfolio-boxes">
                                                        <div className="portfolio-box portfolio-box-studies" style={{ backgroundImage: "url(" + API_IMG_URL + "pages/" + pageSectionDetail.detail.client_1_studies_image + ")" }}>
                                                            <p className="studies-subtitle">{`${pageSectionDetail.detail.client_1_studies_title}`}</p>
                                                            <p className="studies-title">{`${pageSectionDetail.detail.client_1_studies_subtitle}`}</p>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_1_studies_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_1_studies_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                        <div className="portfolio-box portfolio-box-steps">
                                                            <p className="steps-title">{`${pageSectionDetail.detail.client_1_offering_title}`}</p>
                                                            <div className="steps-content">
                                                                <p>{`${pageSectionDetail.detail.client_1_offering_description}`}</p>
                                                            </div>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_1_offering_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_1_offering_btn_text}`}
                                                                <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className="container-lg">
                                            <div className="row">
                                                <div className="col-md-4 portfolio-left">
                                                    <div className="portfolio-img-heading">
                                                        {pageSectionDetail.detail.client_2_image && <img className="portfolio-img" src={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_2_image}`} alt={`${pageSectionDetail.detail.client_2_name}`} />}
                                                        <h2 className="portfolio-heading">{`${pageSectionDetail.detail.client_2_name}`}</h2>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 portfolio-right">
                                                    <h3 className="portfolio-title">{`${pageSectionDetail.detail.client_2_title}`}</h3>
                                                    <div className="portfolio-content">
                                                        <p>{`${pageSectionDetail.detail.client_2_subtitle ?? ''}`}</p>
                                                    </div>
                                                    <div className="portfolio-boxes">
                                                        <div className="portfolio-box portfolio-box-studies" style={{ backgroundImage: "url(" + API_IMG_URL + "pages/" + pageSectionDetail.detail.client_2_studies_image + ")" }}>
                                                            <p className="studies-subtitle">{`${pageSectionDetail.detail.client_2_studies_title}`}</p>
                                                            <p className="studies-title">{`${pageSectionDetail.detail.client_2_studies_subtitle}`}</p>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_2_studies_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_2_studies_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                        <div className="portfolio-box portfolio-box-steps">
                                                            <p className="steps-title">{`${pageSectionDetail.detail.client_2_offering_title}`}</p>
                                                            <div className="steps-content">
                                                                <p>{`${pageSectionDetail.detail.client_2_offering_description}`}</p>
                                                            </div>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_2_offering_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_2_offering_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className="container-lg">
                                            <div className="row">
                                                <div className="col-md-4 portfolio-left">
                                                    <div className="portfolio-img-heading">
                                                        {pageSectionDetail.detail.client_3_image && <img className="portfolio-img" src={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_3_image}`} alt={`${pageSectionDetail.detail.client_3_name}`} />}
                                                        <h2 className="portfolio-heading">{`${pageSectionDetail.detail.client_3_name}`}</h2>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 portfolio-right">
                                                    <h3 className="portfolio-title">{`${pageSectionDetail.detail.client_3_title}`}</h3>
                                                    <div className="portfolio-content">
                                                        <p>{`${pageSectionDetail.detail.client_3_subtitle ?? ''}`}</p>
                                                    </div>
                                                    <div className="portfolio-boxes">
                                                        <div className="portfolio-box portfolio-box-studies" style={{ backgroundImage: "url(" + API_IMG_URL + "pages/" + pageSectionDetail.detail.client_3_studies_image + ")" }}>
                                                            <p className="studies-subtitle">{`${pageSectionDetail.detail.client_3_studies_title}`}</p>
                                                            <p className="studies-title">{`${pageSectionDetail.detail.client_3_studies_subtitle}`}</p>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_3_studies_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_3_studies_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                        <div className="portfolio-box portfolio-box-steps">
                                                            <p className="steps-title">{`${pageSectionDetail.detail.client_3_offering_title}`}</p>
                                                            <div className="steps-content">
                                                                <p>{`${pageSectionDetail.detail.client_3_offering_description}`}</p>
                                                            </div>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_3_offering_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_3_offering_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <div className="container-lg">
                                            <div className="row">
                                                <div className="col-md-4 portfolio-left">
                                                    <div className="portfolio-img-heading">
                                                        {pageSectionDetail.detail.client_4_image && <img className="portfolio-img" src={`${API_IMG_URL}pages/${pageSectionDetail.detail.client_4_image}`} alt={`${pageSectionDetail.detail.client_4_name}`} />}
                                                        <h2 className="portfolio-heading">{`${pageSectionDetail.detail.client_4_name}`}</h2>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 portfolio-right">
                                                    <h3 className="portfolio-title">{`${pageSectionDetail.detail.client_4_title}`}</h3>
                                                    <div className="portfolio-content">
                                                        <p>{`${pageSectionDetail.detail.client_4_subtitle ?? ''}`}</p>
                                                    </div>
                                                    <div className="portfolio-boxes">
                                                        <div className="portfolio-box portfolio-box-studies" style={{ backgroundImage: "url(" + API_IMG_URL + "pages/" + pageSectionDetail.detail.client_4_studies_image + ")" }}>
                                                            <p className="studies-subtitle">{`${pageSectionDetail.detail.client_4_studies_title}`}</p>
                                                            <p className="studies-title">{`${pageSectionDetail.detail.client_4_studies_subtitle}`}</p>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_4_studies_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_4_studies_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                        <div className="portfolio-box portfolio-box-steps">
                                                            <p className="steps-title">{`${pageSectionDetail.detail.client_4_offering_title}`}</p>
                                                            <div className="steps-content">
                                                                <p>{`${pageSectionDetail.detail.client_4_offering_description}`}</p>
                                                            </div>
                                                            <span className="portfolio-link" onClick={() => { navigate(`/client/${pageSectionDetail.detail.client_4_offering_btn_link}`); topHandle(); }}>
                                                                {`${pageSectionDetail.detail.client_4_offering_btn_text}`} <span className="portfolio-link-arrow"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                </Carousel>

                                <div className="portfolio-count">
                                    <span className="big-count">0{index + 1}</span>/<span className="small-count">{totalSlide}</span>
                                </div>

                                <div className="portfolio-btn"><span className="portfolio-view-all" onClick={() => { navigate("/clients"); topHandle(); }}>View All Clients</span></div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default NewPortfolio
