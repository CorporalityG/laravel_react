import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';

function ClientItem(props) {

    const navigate = useNavigate();
    const topHandler = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="col-lg-4 col-md-6">
            <div className="client-item">
                <div className="client-item-img">
                    { props.thumbnail && <img src={props.thumbnail} alt={props.title} /> }
                </div>
                <div className="client-item-content">
                    <div className="client-item-title">{props.title}</div>
                    <div className="client-item-subtitle">{props.subtitle}</div>
                    <div className="client-item-btn">
                        <div onClick={() => { navigate(`/${props.slug}`); topHandler(); }} className="client-item-explore">Explore <img src={BASE_URL + '/img/right-arrow-blue.png'} alt="->" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientItem