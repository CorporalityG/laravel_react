import React from 'react'
import { Link } from 'react-router-dom'

export const MeditechItem = (props) => {
    return (
        <div className='row insights-meditech-item-row'>
            <div className="col-sm-6">
                <div className="meditech-item-banner">
                    <Link to={`/article/${props.slug}`}>
                        {props.thumbnail && <img src={props.thumbnail} alt={props.title} />}
                    </Link>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="meditech-item-content">
                    <Link to={`/category/${props.catSlug}`} className="meditech-item-category">{props.category}</Link>

                    <Link to={`/article/${props.slug}`} className="meditech-item-title">{props.title}</Link>
                </div>
            </div>
        </div>
    )
}