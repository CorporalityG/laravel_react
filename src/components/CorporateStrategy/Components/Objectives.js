import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Aos from "aos";
import "./Objectives.css";
import D3_pie_chart_1 from "./images/D3_pie_chart_1.png";

function Objectives() {

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="container">
      <div className="objectives_main">
        <div
          className="objectives_text  aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="objectives_heading">
            Objectives of our customer success programmes
          </div>
          <button className="objectives_button">
            <p className="objectivesbtn_text" onClick={() => { navigate("/contact"); }}>Book Your Discovery Session</p>
          </button>
          <div className="objectives_heading2">Corporate success strategy</div>
          <div className="objectives_description">
          Having a strong understanding of what the customer wants is crucial for a
           successful corporate level strategy. Corporality formulates guidelines typically
            designed for the senior management level to be filtered down to all the employees 
            across the organization. There are crucial elements of corporate sustainability 
            branding that help customers quickly identify and remember your company.
             With the right marketing mix, our experts cut through the noise to create
              directives to drop a product into the market.

          </div>
        </div>
        <div
          className="objectives_image  aos-init aos-animate"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img src={D3_pie_chart_1} alt="Chart" />
        </div>
      </div>
    </div>
  );
}

export default Objectives;
