import React from "react";
import "./EmotionalQuest.css";
import eq_header from "./images/eq_header.png";
import eq_play from "./images/eq_play.png";
import cr from "./video/cr.mp4";
import cancel from "./images/cancel.png";

function EmotionalQuest() {
  function toggle() {
    var trailer = document.querySelector(".video_container");
    trailer.classList.toggle("active");

    // var video = document.querySelector("video");
    // trailer.classList.toggle("active");
    // video.pause();
    // video.currentTime = 0;
  }

  return (
    <div className="emotional-quest-parent">
      <div className="container-fluid px-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-6">
            <div data-aos="aos-init" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
              <div className="emotional-video">
                {/*<video src={cr} controls={true} autoPlay={false} />*/}
                <iframe src="https://www.youtube.com/embed/M3DekVZlxsM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div data-aos="aos-init" data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-offset="0">
              <div className="emotional-heading">Our Emotional Quest</div>
            </div>
            <div data-aos="aos-init" data-aos="fade-left" data-aos-duration="2100" data-aos-easing="ease-in-out" data-aos-offset="0">
              <div className="emotional-description">
                <p>Are you ready to adopt the virtual work culture and go global?
                Making business human-to-human has never been easier. Train,
                educate, share, and enhance your customer experience by
                connecting with us online. With Corporality, you can learn how
                to utilise Google AdWords, maximize SEO, capture audiences
                with Video Marketing, and most of all, generate leads and
                enhance profitability. Sign up for our mailing list and we’ll
                make sure you’re always in touch with a willing business
                collaborator who will listen to your pains – and ready to turn
                them into gains. Wherever you are in the world, Corporality is
                just one click away.</p>
              </div>
            </div>
          </div>

          <div className="col-md-1"></div>

        </div>
      </div>
    </div>
  );
}

export default EmotionalQuest;
