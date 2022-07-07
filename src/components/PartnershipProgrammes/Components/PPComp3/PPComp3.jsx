import "../PPComp3/PPComp3.css"
import img3back from "../images/img3back.png"
import rec7 from "../images/rec-7.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function PPComp3(pageDetail) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="ppc3Container pl-5 pr-5">
            {
                pageDetail ?
                    <>
                        <p data-aos="zoom-in" data-aos-duration="1000" className="ppcHeading ppc3Heading">{`${pageDetail.discovery_calls_title}`}</p><br />
                        <p data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" className="ppc3Para ppcText">{`${pageDetail.discovery_calls_description}`}</p><br />
                        <a data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000" className='know_button' href={`/${pageDetail.discovery_calls_btn_link}`}>{`${pageDetail.discovery_calls_btn_text}`}</a>
                        <img className="ppc3Img3back" src={img3back} alt="img3back" />
                        <img className="ppc3rec7-1" src={rec7} alt="rec7" />
                        <img className="ppc3rec7-2" src={rec7} alt="rec7" />
                    </>
                    : null
            }
        </div>
    )
}
