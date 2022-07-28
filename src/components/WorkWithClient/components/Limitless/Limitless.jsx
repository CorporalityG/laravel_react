import React from 'react'
import '../Limitless/Limitless.css'
import { API_IMG_URL } from '../../../../config';

const Limitless = (pageDetail) => {

    return (
        <div>
            <div className="In_Div_anm_container-Limitless">

                <div className="In_Div_anm_container_img-Limitless">
                    {pageDetail.author_image && <img src={`${API_IMG_URL}pages/${pageDetail.author_image}`} alt={`${pageDetail.author_name}`} />}
                </div>
                <div className="In_Div_anm_container_text-Limitless">
                    <div className="In_Div_anm_upper_box-Limitless">

                    </div>
                    <div className="In_Div_anm_middle_box-Limitless" >
                        <h1 className="In_Div_anm_container_text-h1-Limitless" dangerouslySetInnerHTML={{ __html: pageDetail.author_title }}></h1>
                    </div>
                    <div className="In_Div_anm_lower_box-Limitless">
                        <h3 className="anm-h3-Limitless">{`${pageDetail.author_name}`}</h3>
                        <p>{`${pageDetail.author_designation}`}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Limitless
