import "../PPComp2/PPComp2.css"
import rec8 from "../images/rec-8.png"
import wall from "../images/wall.png"
import img2back from "../images/img2back.png"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { API_IMG_URL } from '../../../../config';

export default function PPComp2(pageDetail) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            {
                pageDetail ?
                    <div className="p-0 ppComp2  ">
                        <img className="ppc2Img2back" src={img2back} alt="img2back" />
                        <div className="row d-flex flex-row ppc2RowContainer">
                            <div className="col p-0">
                                <div data-aos="fade-right" data-aos-duration="2000" className="ppc2ImgWrapper">
                                    <div className="ppc2MainImg">
                                        <img className="ppc2Img2" src={`${API_IMG_URL}pages/${pageDetail.conversation_image}`} alt={`${pageDetail.conversation_title}`} />
                                    </div>
                                    <img className="ppc2Wall" src={wall} alt="wall" />
                                    <img className="ppc2Rec8" src={rec8} alt="rec8" />
                                </div>
                            </div>
                            <div className="col p-0 ppc2ColContainer">
                                <div className="ppc2ColTextWrapper">
                                    <p data-aos="fade-left" data-aos-duration="2000" className="ppcHeading">{`${pageDetail.conversation_title}`}</p><br />
                                    <p className="ppcText" data-aos="fade-left" data-aos-delay="300" data-aos-duration="2000">{`${pageDetail.conversation_description}`}</p><br />
                                    <a data-aos="fade-left" data-aos-delay="600" data-aos-duration="2000" className='ppc2Button' href={`/${pageDetail.conversation_btn_link}`}>{`${pageDetail.conversation_btn_text}`}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}
