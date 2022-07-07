import "../PPComp4/PPComp4.css"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { API_IMG_URL } from '../../../../config';

export default function PPComp4(pageDetail) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="ppc4Container">
            {
                pageDetail ?
                    <>
                        <p data-aos="fade-down" data-aos-duration="1000" className="ppcHeading">{`${pageDetail.partnership_title}`}</p><br />
                        <p data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" className="ppc4Para">{`${pageDetail.partnership_description}`}</p><br />
                        <div className="ppc4Partners">
                            <img data-aos="flip-left" data-aos-duration="1000" className="ppc4PartnerItem1" src={`${API_IMG_URL}pages/${pageDetail.partnership_logo_1}`} alt="partner1" />
                            <img data-aos="flip-left" data-aos-delay="300" data-aos-duration="1000" className="ppc4PartnerItem2" src={`${API_IMG_URL}pages/${pageDetail.partnership_logo_2}`}alt="partner2" />
                            <img data-aos="flip-left" data-aos-delay="600" data-aos-duration="1000" className="ppc4PartnerItem3" src={`${API_IMG_URL}pages/${pageDetail.partnership_logo_3}`} alt="partner3" />
                            <img data-aos="flip-left" data-aos-delay="1200" data-aos-duration="1000" className="ppc4PartnerItem5" src={`${API_IMG_URL}pages/${pageDetail.partnership_logo_4}`}alt="partner5" />
                        </div>
                    </>
                    : null
            }
        </div>
    )
}
