import React from 'react'
import { BASE_URL } from '../../config'

export const CurrentOpeningItem = (props) => {
  return (
    <div className="col-lg-6 career-co-box-col">
        <div className="career-co-box">
            <div className="co-box-title">
              <img src={`${BASE_URL}/img/Careers/current-openings-favicon.png`} alt={props.title} className="co-box-fav" />
              {props.title}
            </div>
            <div className="co-box-content" dangerouslySetInnerHTML={{ __html: props.content }}></div>
        </div>
    </div>
  )
}