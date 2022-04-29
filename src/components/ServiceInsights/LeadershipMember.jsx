import React from 'react'
import { BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

export const LeadershipMember = (props) => {
    return (
        <div className="col-lg-3 si-ol-member-col">
            <div className="si-ol-member">
                <div className="ol-member-img">
                    {props.thumbnail && <img src={props.thumbnail} alt={props.name} className="ol-member-avtar" />}
                </div>
                <div className='ol-member'>
                    <div className="ol-member-name">{props.name}</div>
                    <div className="ol-member-designation">{props.designation}</div>
                    <div className="ol-member-social">
                        <a href={`${props.linkedin}`}><i className="fa fa-linkedin"></i>LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
}