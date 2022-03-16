import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const BuildQ = () => {

	const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

	return (
		<div className="cause-studies-container">
			
			<div className="case-study-banner">
				<img src={BASE_URL + '/img/case-study-rec-1.png'} alt="case-study-rec-1" className="case-study-rec case-study-rec-1" />
				<img src={BASE_URL + '/img/case-study-rec-2.png'} alt="case-study-rec-2" className="case-study-rec case-study-rec-2" />
				<img src={BASE_URL + '/img/case-study-rec-3.png'} alt="case-study-rec-3" className="case-study-rec case-study-rec-3" />

				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="case-study-banner-content">
								<div className="heading">
									<h1>Revamped corporate and operating models increases BuildQ Group’s sales</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>BuildQ Group, a construction company in Sydney, is reinvented with the help of a comprehensive Digital Media Marketing strategy that tactically revived growth and strengthened customer communications.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Build-Q-logo.png'} alt="Build-Q-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Build-Q-icon.png'} alt="Build-Q-icon" className="case-study-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-challenge-container">
				<div className="container">
					<div className="row case-study-challenge-row">
						<div className="col-md-6">
							<div className="case-study-challenge-img">
								<img src={BASE_URL + '/img/Build-Q.png'} alt="Build-Q" />
							</div>
						</div>

						<div className="col-md-6">
							<div className="case-study-challenge-content">
								<h2>The challenge</h2>
								<p>BuildQ Group is one of the trusted home builders based in Sydney. They have over 550+ projects completed and satisfied clients in New South Wales. They’re a company composed of goal-driven experts passionate about making each of their client’s dream home a reality. To make that happen, they needed an increased awareness about their brand, targeted sales approach and streamlined processes. This is how our story began.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-12">
					<div className="case-study-bottom-line"></div>
					</div>
				</div>
			</div>

			<div className="case-study-glance-container">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h2>At a glance</h2>
						</div>
					</div>

					<div className="row case-study-glance-box-row">
						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/build-q-glance-client.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Clients inquiry every week and it was achieved</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/build-q-glance-platform.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title"> In total digital visibility across the different platform and increasing</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/build-q-glance-project.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Projected increase in average sales </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-12">
					<div className="case-study-bottom-line"></div>
					</div>
				</div>
			</div>

			<div className="case-study-solution-container">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="case-study-solution-content">
								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p>Identifying the right mechanisms and operating them in a purposeful, coordinated manner is often required for growth. We assisted BuildQ Group in evaluating and ultimately redesigning its digital front in order to gain new customers while increasing the value of new customer relationships.</p>
								<p>Our strategy began with a review of BuildQ's current customer base. We looked at the company's network of distribution partners, and segmented customers by area to find gaps in digital presence. At that time, the company's visibility was very low and they were missing many opportunities.</p>
								<p>We proposed a new strategy that included the intended maturation model and methodology. With this, we demonstrated how a restructuring of the company’s digital presence, and corporate culture would target prospective new markets while using data on new house constructions and other commercial activities. Corporality Global also recommended that the company provide its sales force with a data-driven understanding of its clients, including unique patterns of behaviour and unmet needs.</p>
								<p>We created an analytical model that could compute what maximum potential might look like for any specific consumer based on attributes shared with us. This research was carried out by product category and region to see where the company had the most room for expansion. We also predicted the product-level sales pitch that are most likely to succeed with each underserved consumer. While importing the model’s output into a digital display, we also allowed the promotion of front-line adoption.</p>
								<p>Our research indicated a wide range of tastes among BuildQ’s customers especially since they were also able to start their real-estate division.. We discovered that some accounts desired more regular in-person visits, while others wanted less, based on focus groups and sales statistics. With this data, we were able to assist the company in developing and restructuring strategies that would ensure that each customer received the maximum amount of attention possible. We devised a new set of operational responsibilities that were suited for their target client base. Overall, their growth was boosted by around 15% as a result of our proposal, and additional support functions, including an operations analytics team was put in place for them. </p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-related-box">
								<div className="case-study-related-title">Related cause studies</div>
								<ul>
									<li>BuildQ</li>
									<li>Meyer West</li>
									<li>X Designs</li>
									<li>BuildQ</li>
								</ul>
								<div className="case-study-all" onClick={() => { navigate("/clients"); topHandle(); }}><span>View All</span> <img src={BASE_URL + '/img/right-arrow-white.png'} alt="->" /></div>
							</div>

							<div className="case-study-suggested-box-main">
								<div className="case-study-suggested-top-line"></div>
									<div className="case-study-suggested-box">
									<div className="case-study-suggested-title">Suggested for you</div>
									<div className="case-study-suggested-content">
										<p>Our strategy began with a review of BuildQ's current customer base. We looked at the company's network of distribution partners, and segmented customers.</p>
									</div>
									<div className="case-study-suggested-btn">Go to Marketing</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-outcome-container">
				<div className="container">
					<div className="row">
						<div className="col-md-10 offset-2">
							<div className="case-study-outcome-video">
								<div className="case-study-outcome-video-banner">
									<img src={BASE_URL + '/img/case-study-outcome-video-banner.png'} alt="video-banner" />
								</div>
								<div className="case-study-outcome-play">
									<img src={BASE_URL + '/img/case-study-outcome-video-play.png'} alt="Play" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default BuildQ