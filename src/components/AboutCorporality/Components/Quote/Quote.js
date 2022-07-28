import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Quote.css";
import group_boxes from "../Quote/group_boxes.png";
import quotation_mark from "../Quote/quotation_mark.png";
import { API_IMG_URL } from '../../../../config';

function Quote(pageDetail) {

  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <>
      <div className="quote_container_parent">
        {
          pageDetail ?
            <>
              <div className="box_image">
                <img src={group_boxes} alt="group_boxes" />
              </div>
              <div className="container">
                <div className="quote_container">
                  <div className="all_contents">
                    <div className="" data-aos="zoom-out" data-aos-duration="1000">
                      <div className="main_upper_text">
                        {`${pageDetail.author_bio}`}
                      </div>
                      <div className="main_bottom_text">
                        - {`${pageDetail.author_name}`}, {`${pageDetail.author_designation}`}
                      </div>
                    </div>
                  </div>

                  <div
                    className="image_left "
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    {pageDetail.author_image && <img src={`${API_IMG_URL}pages/${pageDetail.author_image}`} alt={`${pageDetail.author_name}`} />}
                  </div>
                  <div className="quote_image">
                    <img src={quotation_mark} alt="quotation_mark" />
                  </div>
                </div>
              </div>
            </>
            : null
        }
      </div>
    </>
  );
}

export default Quote;
