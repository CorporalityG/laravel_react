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
                <div className="col-md-4 abm-work-left">
                    <div className="abm-work-img-heading">
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} className="abm-work-img" />}
                        <h2 className="abm-work-heading">{props.title}</h2>
                    </div>
                </div>
                <div className="col-md-8 abm-work-right">
                    <h3 className="abm-work-title">Work that Excites us.</h3>
                    <div className="abm-work-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                    <div className="abm-work-boxes">
                        <div className="abm-work-box abm-work-box-studies" style={{ backgroundImage: "url("+props.featuredImg+")" }}>
                            <p className="studies-subtitle">Featured cause studies</p>
                            <p className="studies-title">{props.featuredTitle}</p>
                            <span className="abm-work-link" onClick={() => { navigate(`/${props.slug}`); topHandle(); }}>Explore <img src={`${BASE_URL}/img/AccountBasedMarketing/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                        <div className="abm-work-box abm-work-box-steps">
                            <p className="steps-title">{props.offeringTitle}</p>
                            <div className="steps-content" dangerouslySetInnerHTML={{ __html: props.offerinContent }}>
                            </div>
                            <span className="abm-work-link" onClick={() => { navigate(`/${props.slug}`); topHandle(); }}>View Offering <img src={`${BASE_URL}/img/AccountBasedMarketing/right-arrow-blue.png`} alt="->" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}