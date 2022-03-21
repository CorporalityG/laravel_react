import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const DivineIntercession = () => {

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
									<h1>Intended Maturation Model helps an NGO get back on track and receive much-needed monetisation</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>The continued success of a non-profit organisation completely depends upon funding, donations and product purchases. For Divine Intercession Australia, there was very little hope. The NGO unit was hard-strapped for funds and could gather some or no customer attention towards itself. As part of a marathon strategy, Corporality worked across complex hurdles with the entity to build a unified force of growth. </p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Divine-Intercession-logo.png'} alt="Divine-Intercession-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Divine-Intercession-icon.png'} alt="Divine-Intercession-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/Divine-Intercession.png'} alt="Divine-Intercession" />
							</div>
						</div>

						<div className="col-md-6">
							<div className="case-study-challenge-content">
								<h2>The challenge</h2>
								<p>Divine Intercession Australia, an NGO, extends a helping hand to various classes in society, including immigrants seeking assistance in a foreign land. The institution under the leadership of Joseph Sesay also caters to other religious causes including demonic vindication while trying to provide for basic needs such as food, clothing and water to those in need within and outside the community. However, the institution was suffering due to the lack of funds, which was a direct result of the lack of widespread awareness amongst people. The small audience was not enough to propagate what Divine intended to do on a much larger scale. Besides, they did not have the kind of internal strength to execute and implement their goals and objectives that was so crucial for their growth.</p>
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
								<img src={BASE_URL + '/img/Divine-Intercession-glance-channels.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title"> In views across all channels</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Divine-Intercession-glance-revenue.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">Growth in revenue</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Divine-Intercession-glance-improve.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Took many initiatives to improve the corporate structure</div>
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
								<p>While re-establishing the NGO’s vision,  we planned every single task in accordance with their budget and managed resources within and outside the organisation to steer their end goals. An optimal mix of designers, developers and writers was used to capture the synergies.</p>
								<p><b>Evaluation:</b> With our Corporate Strategy, using the intended maturation model we first performed a comprehensive audit and assessed the current position of the organisation. We set aggressive timelines to hit marketing and saleability targets while staying highly focused on expanding the customer and sponsorship bases. A comprehensive assessment of the products sold, the territories they covered and customers they targeted were gathered. We also assessed the current state of digital and social media marketing including their YouTube Australia activity.</p>
								<p><b>Engaging with the leadership:</b> We connected with the stakeholder(s) of the institution to develop and frame an integrated methodology while also analysing various options for their future digital state.</p>
								<p><b>Implementing the semantics:</b> The result and inference of the analysis was then put through a disciplined pathway that would impact customers, territories and products and ensure recognition amongst a greater target audience.</p>
								<p><b>Launch:</b> All synergies were achieved within the timeline where a new set of roles and responsibilities evolved while the key stakeholder(s) got clear communication about institutional plans and requirements. </p>
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

					<div className="row case-study-outcome-content-main">
						<div className="col-md-6">
							<div className="case-study-testimonial">
								<img src={BASE_URL + '/img/testi-img.png'} alt="testi-img" className="case-study-testi-img" />
								<div className="case-study-testi-content">
									<img src={BASE_URL + '/img/testi-quote.png'} alt="testi-quote" className="case-study-testi-quote" />
									<p>Our strategy began with a review of BuildQ's current customer base. We looked at the company's network of distribution partners, and segmented customers by area to find sales gaps. The company was  frequently wasting their efforts and missing out on significant possibilities that were there in front of them.</p>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="case-study-outcome-content">
								<h2>The outcome</h2>
								<p>Within a year of planning, there was a steady increase in all social media visibility and engagements, which resulted in growth and proper brand positioning. Guided by a new plan, the organisation was able to incorporate sales enablement tools including revised training programmes that realised net synergies of up to a 100% increase in their digital presence. Sales orders also began to gradually increase resulting in a growth in revenue of up to 2% year on year. </p>
								<p>Corporality Global also established a strong working relationship with Divine Intercession Australia and continued to service their noble cause.</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-business-level-container">
				<div className="container">
					<div className="row case-study-business-level-row">
						<div className="col-md-6">
							<div className="case-study-business-level">
								<div className="case-study-business-level-title">Ready to take your business to the next level?</div>
								<div className="case-study-business-level-content">
									<span>Talk to our experts in:</span>
									<div className="case-study-business-level-dd">Medtech</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="case-study-business-expand">
								<p>We provide strategic consulting to businesses worldwide. Want to expand your business globally, or want to achieve great success in your respective industry? We got your back.</p>
								<div className="case-study-business-expand-form">
									<div className="row">
										<div className="col-md-6 form-group">
											<input type="text" className="form-control" placeholder="First name" />
										</div>
										<div className="col-md-6 form-group">
											<input type="text" className="form-control" placeholder="Last name" />
										</div>

										<div className="col-md-12 form-group">
											<button type="submit" className="business-expand-btn">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-related-container">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<RelatedCaseStudyCarousel slug={'divine-intercession'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default DivineIntercession