import React from 'react'
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

function ClientItem(props) {

    const topHandler = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="col-lg-4 col-md-6">
            <div className="client-item">
                <div className="client-item-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                </div>
                <div className="client-item-content">
                    <div className="client-item-title">{props.title}</div>
                    <div className="client-item-btn">
                        <Link to={`/client/${props.slug}`} onClick={() => { topHandler(); }} className="client-item-explore">Explore <img src={BASE_URL + '/img/right-arrow-blue.png'} alt="->" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientItem