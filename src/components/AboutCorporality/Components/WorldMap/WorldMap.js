import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./WorldMap.css";
import { API_IMG_URL } from '../../../../config';

function WorldMap(pageDetail) {

  useEffect(() => {
    Aos.init();
    Aos.init({ disable: "mobile" });
  });

  return (
    <div className="worldmap_parent">
      <div className="container">
        <div className="worldmap_container">
          <div
            className="worldmap_left "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {pageDetail.world_map_image_1 && <img src={`${API_IMG_URL}pages/${pageDetail.world_map_image_1}`} alt="left" />}
          </div>
          <div
            className="worldmap_right "
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            {pageDetail.world_map_image_2 && <img src={`${API_IMG_URL}pages/${pageDetail.world_map_image_2}`} alt="right" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMap;
