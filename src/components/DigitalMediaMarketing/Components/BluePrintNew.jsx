import React from 'react'
import './BluePrintNew.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../../config';

function BlueprintNew() {
	return (
		<div className="blueprint_container">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="blueprint_plan_content">
							<h1>THE WEBSITE BLUEPRINT MASTER PLAN</h1>
							<p>The Corporality Website blueprint Masterplan is a strategic process to construct your virtual office. Our website design, development experts and dedicated team will work closely with you and start with hands-on brainstorming sessions to achieve your marketing objective through this website blueprint. It's an intense, multi-layer process, but the final outcome is priceless. Initiate your best customer experience with the Corporality Website MasterPlan, and you will have a customer-centric conversion-based website that will sell for you.</p>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<div className="blueprint_plan_area">
							<div className='blueprint_heading'>Steps for brand positioning</div>

							<div className="blueprint_img_main">
								<img src={BASE_URL + "/img/DigitalMediaMarketing/blueprint/blueprint-center.png"} className="blueprint_img_center" data-aos="zoom-in" data-aos-duration="500" />
								<img src={BASE_URL + "/img/DigitalMediaMarketing/blueprint/circle.png"} className="blueprint_img_circle" data-aos="zoom-in" data-aos-duration="1500" />
								<img src={BASE_URL + "/img/DigitalMediaMarketing/blueprint/blueprint-cards.png"} className='blueprint_img_card' data-aos="zoom-in" data-aos-duration="3000" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlueprintNew