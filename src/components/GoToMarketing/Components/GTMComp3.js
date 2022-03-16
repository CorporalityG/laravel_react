import React, { useEffect } from "react";
import "./GTMComp3.css";
import "./animate3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AllCardsNew from "./AllCardsNew/AllCardsNew";
import Aos from "aos";
import "aos/dist/aos.css";

function GTMComp3() {
  useEffect(() => {
    Aos.init();
  });
    return (
        <>
            <div className="GTMComp3 container text-center mx-auto d-flex flex-column align-items-center justify-content-center">
                <div className="container">
                    <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" className="aos-init aos-animate">
                        <h1 className="animate two">
                            <span>Delivering</span>&nbsp;<span>unique</span>&nbsp;<span>value</span>&nbsp;<span>propositions</span>
                        </h1>
                    </div>
                    <div data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-delay="1000" className="mb-5 mt-2 text aos-init aos-animate">The founding structure of the Go To Marketing strategy is to plan, refine, iterate and plan again till you are convinced and confident about stepping forward. The key to a profitable product launch is crafting an actionable and practical go-to-marketing plan while dodging and eliminating disastrous hiccups and glitches.</div>
                </div>
                <AllCardsNew />
            </div>
        </>
    );
}

export default GTMComp3;