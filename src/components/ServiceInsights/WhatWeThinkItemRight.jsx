import React from 'react'
import { Link } from 'react-router-dom';

export const WhatWeThinkItemRight = (props) => {
    return (
        <div className='si-wwt-item-right si-wwt-item-content'>
            <Link to={`/${props.catSlug}`} className='si-wwt-item-cat'>{props.category}</Link>
            <div className='si-wwt-item-title'>
                <Link to={`/${props.slug}`}>{props.title}</Link>
            </div>
        </div>
    )
}