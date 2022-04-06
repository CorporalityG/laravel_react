import React from 'react'
import { BASE_URL } from '../../../config'
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
                <div className="col-md-4 dmm-work-left">
                    <div className="dmm-work-img-heading">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} className="dmm-work-img" />}
                        <h2 className="dmm-work-heading">{props.title}</h2>
                    </div>
                </div>
                <div className="col-md-8 dmm-work-right">
                    <h3 className="dmm-work-title">Work that Excites us.</h3>
                    <div className="dmm-work-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                    <div className="dmm-work-boxes">
                        <div className="dmm-work-box dmm-work-box-studies" style={{ backgroundImage: "url("+props.featuredImg+")" }}>
                            <p className="studies-subtitle">Featured cause studies</p>
                            <p className="studies-title">{props.featuredTitle}</p>
                            <span className="dmm-work-link" onClick={() => { navigate(`/${props.slug}`); topHandle(); }}>Explore <img src={`${BASE_URL}/img/DigitalMediaMarketing/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                        <div className="dmm-work-box dmm-work-box-steps">
                            <p className="steps-title">{props.offeringTitle}</p>
                            <div className="steps-content" dangerouslySetInnerHTML={{ __html: props.offerinContent }}>
                            </div>
                            <span className="dmm-work-link" onClick={() => { navigate(`/${props.slug}`); topHandle(); }}>View Offering <img src={`${BASE_URL}/img/DigitalMediaMarketing/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}