import React from 'react'
import '../HoverInclusion/Hover.css'
import { API_IMG_URL } from '../../../../config';

const Hover = (pageDetail) => {

    return (
        <div>
            <div className="In_Div_anm_container">
                <div className="In_Div_anm_container_img">
                    <img src={`${API_IMG_URL}pages/${pageDetail.author_image}`} alt="Inclusivity and diversity" />
                </div>
                <div className="In_Div_anm_container_text">
                    <div className="In_Div_anm_upper_box">

                    </div>
                    <div className="In_Div_anm_middle_box" >
                        <h1 className="In_Div_anm_container_text-h1" dangerouslySetInnerHTML={{ __html: pageDetail.author_title }}></h1>
                    </div>
                    <div className="In_Div_anm_lower_box">
                        <h3 className="anm-h3">{`${pageDetail.author_name}`}</h3>
                        <p>{`${pageDetail.author_designation}`}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hover