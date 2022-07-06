import React from 'react'
import '../CareerImage/Career.css'
import { API_IMG_URL } from '../../../../config';

const Career = (pageDetail) => {
    return (
        <div className='zcareer-image-container'>
            <img data-aos="flip-right" data-aos-duration="2000" data-aos-delay="1000" src={`${API_IMG_URL}pages/${pageDetail.careers_image}`} alt='career' className='career-fluid-card' />
            <img  src={`${API_IMG_URL}pages/${pageDetail.careers_image_bg}`} alt='career bg' className=' img-fluid image-career' />
        </div>
    )
}

export default Career
