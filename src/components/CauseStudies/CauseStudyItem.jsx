import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../config';

function CauseStudyItem(props) {

    const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div className="case-study-item">
            <div className="case-study-item-img">
                { props.thumbnail && <img src={props.thumbnail} alt={props.title} /> }
            </div>
            <div className="case-study-item-content">
                <div className="case-study-item-title">{props.title}</div>
                <div className="case-study-item-btn">
                    <div onClick={() => { navigate(`/${props.slug}`); topHandle(); }} className="case-study-item-explore">Explore <img src={BASE_URL + '/img/right-arrow-blue.png'} alt="->" /></div>
                </div>
            </div>
        </div>
    )
}

export default CauseStudyItem