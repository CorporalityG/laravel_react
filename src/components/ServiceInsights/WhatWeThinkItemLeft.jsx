import React from 'react'
import { Link } from 'react-router-dom';

export const WhatWeThinkItemLeft = (props) => {
    return (
        <div className='row si-wwt-item-row'>
            <div className='col-md-3 si-wwt-item-col'>
                <div className='si-wwt-item-img'>
                    {
                        props.thumbnail ?
                            <Link to={`/${props.slug}`}>
                                <img src={props.thumbnail} alt={props.title} />
                            </Link>
                            : null
                    }
                </div>
            </div>

            <div className='col-md-9 si-wwt-item-col'>
                <div className='si-wwt-item-content'>
                    <Link to={`/${props.catSlug}`} className='si-wwt-item-cat'>{props.category}</Link>
                    <div className='si-wwt-item-title'>
                        <Link to={`/${props.slug}`}>{props.title}</Link>
                    </div>
                    <div className="si-wwt-item-desc" dangerouslySetInnerHTML={{ __html: props.content }}></div>
                </div>
            </div>
        </div>
    )
}