import React from 'react'
import { BASE_URL } from '../../config'
import { useNavigate } from "react-router"

export const ClientWorkItem = (props) => {

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-4 clients-work-left">
                    <div className="clients-work-img-heading" data-aos="zoom-in-right">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.clientName} className="clients-work-img" />}
                        <h2 className="clients-work-heading">{props.clientName}</h2>
                    </div>
                </div>
                <div className="col-lg-8 clients-work-right">
                    <h3 className="clients-work-title" data-aos="zoom-in-down">{props.title}</h3>
                    <div className="clients-work-content" dangerouslySetInnerHTML={{ __html: props.subtitle }} data-aos="zoom-in-down"></div>
                    <div className="clients-work-boxes">
                        <div className="clients-work-box clients-work-box-studies" style={{ backgroundImage: "url("+props.studiesImg+")" }} data-aos="fade-up" data-aos-delay="150">
                            <p className="studies-subtitle">{props.studiesTitle}</p>
                            <p className="studies-title">{props.studiesSubTitle}</p>
                            <span className="clients-work-link" onClick={() => { navigate(`/client/${props.studiesBtnLink}`); topHandle(); }}>{props.studiesBtnText} <img src={`${BASE_URL}/img/ServicesClients/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                        <div className="clients-work-box clients-work-box-steps" data-aos="fade-up" data-aos-delay="300">
                            <p className="steps-title">{props.offeringTitle}</p>
                            <div className="steps-content" dangerouslySetInnerHTML={{ __html: props.offeringDescription }}>
                            </div>
                            <span className="clients-work-link" onClick={() => { navigate(`/client/${props.offeringBtnLink}`); topHandle(); }}>{props.offeringBtnText} <img src={`${BASE_URL}/img/ServicesClients/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}