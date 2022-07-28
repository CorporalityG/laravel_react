import React from "react";
import "./EmotionalQuest.css";
import { API_IMG_URL } from '../../../config';

function EmotionalQuest(pageDetail) {

  return (
    <div className="emotional-quest-parent">
      {
        pageDetail ?
          <div className="container-lg">
            <div className="row d-flex align-items-center">

              <div className="col-md-6">
                <div data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                  <div className="emotional-video">
                    <video src={`${API_IMG_URL}pages/${pageDetail.emotional_quest_video_url}`} controls={true} autoPlay={false} poster={pageDetail.emotional_quest_video_thumbnail && `${API_IMG_URL}pages/${pageDetail.emotional_quest_video_thumbnail}`} />
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="emotional-content">
                  <div data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
                    <div className="emotional-heading">{`${pageDetail.emotional_quest_title}`}</div>
                  </div>
                  <div data-aos="fade-left" data-aos-duration="2100" data-aos-easing="ease-in-out" data-aos-offset="0">
                    <div className="emotional-description">
                      <p>{`${pageDetail.emotional_quest_description}`}</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          : null
      }
    </div>
  );
}

export default EmotionalQuest;
