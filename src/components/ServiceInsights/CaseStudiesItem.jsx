import React from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../config'

export const CaseStudiesItem = (props) => {
    return (
        <div className='col-lg-4 si-cs-item-col'>
            <div className='si-cs-item'>
                <div className='si-cs-item-img'>
                    {
                        props.thumbnail ?
                            <Link to={`/${props.slug}`}>
                                <img src={props.thumbnail} alt={props.title} />
                            </Link>
                            : null
                    }
                </div>
                <div className='si-cs-item-content'>
                    <div className='si-cs-item-desc'>
                        {
                            props.category ?
                                <Link to={`/${props.catSlug}`} className='si-cs-item-cat'>{props.category}</Link>
                                : null
                        }
                        <div className='si-cs-item-title'>
                            <Link to={`/${props.slug}`}>{props.title}</Link>
                        </div>
                        <div className="si-c-i-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                    </div>
                    <div className='si-cs-item-btn'>
                        <Link to={`/${props.slug}`} className="si-link">Read More <img src={`${BASE_URL}/img/ServiceInsights/left-arrow.png`} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}