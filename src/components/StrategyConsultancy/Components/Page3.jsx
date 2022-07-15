
import './Page3.css'
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Page3 = (pageDetail) => {
    useEffect(() => {
        Aos.init();
    })

    return (
        <>
            {
                pageDetail ?
                    <div className="">
                        <div className="d-md-flex justify-content-center Consultancypage-3">
                            <div data-aos="fade-right" data-aos-duration="1200">

                            </div>
                            <div className="model-para">
                                <h2 className="">{`${pageDetail.business_model_design_title}`}</h2>
                                <p className="">{`${pageDetail.business_model_design_description}`}</p>
                            </div>



                            <div className='circle-container-consultancy'>
                                <div className="centeeeer"><div className="Consultancypage-3-diamond centereeeee Consultancydia Consultancyc"><p>{`${pageDetail.business_model_design_item_1_title}`}</p></div></div>
                                <div className="deg45"><div className="Consultancypage-3-diamond Consultancydia"> <p>{`${pageDetail.business_model_design_item_3_title}`}</p></div></div>
                                <div className="deg225"><div className="Consultancypage-3-diamond Consultancydia"><p>{`${pageDetail.business_model_design_item_5_title}`}</p></div></div>
                                <div className="deg135"><div className="Consultancypage-3-diamond Consultancydia"><p>{`${pageDetail.business_model_design_item_4_title}`}</p></div></div>
                                <div className="deg315"><div className="Consultancypage-3-diamond Consultancydia"><p>{`${pageDetail.business_model_design_item_2_title}`} </p></div></div>
                            </div>

                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default Page3
