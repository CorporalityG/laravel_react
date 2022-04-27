import React from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config'

export const NewsItem = (props) => {
    return (
        <div className='col-lg-4 si-news-item-col'>
            <div className='si-news-item'>
                <div className='si-news-item-content'>
                    <Link to={`/${props.slug}`} className="si-news-item-title">{props.title}</Link>
                    <div className="si-news-item-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                </div>
                <div className='si-news-item-btn'>
                    <Link to={`/${props.slug}`} className="si-link">Read More <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}