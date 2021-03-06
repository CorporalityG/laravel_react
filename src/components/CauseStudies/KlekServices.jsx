import React from "react";
import './CaseStudy.css'
import { BASE_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const KlekServices = () => {
	return (
		<div className="cause-studies-container">

			<div className="case-study-banner">
				<img src={BASE_URL + '/img/case-study-rec-1.png'} alt="case-study-rec-1" className="case-study-rec case-study-rec-1" />
				<img src={BASE_URL + '/img/case-study-rec-2.png'} alt="case-study-rec-2" className="case-study-rec case-study-rec-2" />
				<img src={BASE_URL + '/img/case-study-rec-3.png'} alt="case-study-rec-3" className="case-study-rec case-study-rec-3" />

				<div className="container-lg">
					<div className="row">
						<div className="col-md-8">
							<div className="case-study-banner-content">
								<div className="heading">
									<h1>Digital-first approach helps increase customer engagement</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>Customer centricity meant embracing digitalisation for klek services that was stuck in the past.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Klek-Services-logo.png'} alt="Klek-Services-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Klek-Services-icon.png'} alt="Klek-Services-icon" className="case-study-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-glance-container">
				<div className="container-lg">
					<div className="row">
						<div className="col-md-12">
							<h2>At a glance</h2>
						</div>
					</div>

					<div className="row case-study-glance-box-row">
						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Klek-Services-glance-growth.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Growth in brand recall</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Klek-Services-glance-points.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">Increase in customer experience</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Klek-Services-glance-platform.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title"> In total digital visibility across the different platform and increasing</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-lg">
				<div className="row">
					<div className="col-md-12">
						<div className="case-study-bottom-line"></div>
					</div>
				</div>
			</div>

			<div className="case-study-solution-container">
				<div className="container-lg">
					<div className="row">
						<div className="col-md-8">
							<div className="case-study-solution-content">
								<h2>The challenge</h2>
								<p>The internet is a key driver of growth and more so, the digital presence of a company. For klek services, though, this was a weak spot. The company was not meeting expectations in terms of functionality, reliability and speed. There was a need to curate a brand that would help them build relationships with their audience and deliver a positive experience. </p>
								<p>Klek services was using outdated service channels before they approached Corporality Global with a need to upgrade their current web presence.  They required assistance in creating a more seamless, interactive consumer experience. We this, Corporality Global and Klek Service embarked on a journey of delivering a digitalisation roadmap to increase customer engagement, and improve online experience and sales.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p>Brand Positioning: We first embarked on a brand positioning journey with authenticity in mind. ???Facts tell, Stories Sell??? - this is what Corporality Global???s design team fixated on as they came up with a unique and sleek branding design for klek services. Thereafter, a customer experience transformation plan was drawn to create a digital-first enterprise that could significantly improve service personalisation.</p>
								<p>Interactive Blueprint Strategy: Corporality???s fast-growing team of innovators began identifying growth opportunity areas and generated a roster of solutions that can be offered by klek services. Quick experiments would determine which ones required more time before scaling ideas. We prioritised all project deliverables while getting a grasp on customer advocacy, which differentiated our approach. With our digital-first focus, customer interactions were all set to improve with a positive momentum and uplift. It was as if for the first time, the leadership got a unified and precise view of the current state of affairs versus where it should have been.</p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>Our strategy was hinged on creating greater portfolio value and aligning management on strategic priorities while helping them focus on innovation. With our support, the value proposition automatically evolved, defining the full potential of the business. </p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/Klek-Services.png'} alt="Klek-Services" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-outcome-container">
				<div className="container-lg">
					<div className="row">
						<div className="col-md-8 offset-md-4">
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
								<img src={BASE_URL + '/img/Klek-Services-logo.png'} alt="Klek-Services-logo" className="case-study-testi-logo" />
								<div className="case-study-testi-content">
									<img src={BASE_URL + '/img/testi-quote.png'} alt="testi-quote" className="case-study-testi-quote" />
									<p>Our strategy began with a review of BuildQ's current customer base. We looked at the company's network of distribution partners, and segmented customers by area to find sales gaps. The company was  frequently wasting their efforts and missing out on significant possibilities that were there in front of them.</p>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="case-study-business-level-content">
								<div className="case-study-business-level-title">Ready to take your business to the next level?</div>
								<p>We provide strategic consulting to businesses worldwide. Want to expand your business globally, or want to achieve great success in your respective industry? We got your back.</p>
								<div className="case-study-business-level-form">
									<div className="row">
										<div className="col-sm-6 form-group">
											<input type="text" className="form-control" placeholder="Name" />
										</div>
										<div className="col-sm-6 form-group">
											<input type="email" className="form-control" placeholder="Email" />
										</div>

										<div className="col-md-12">
											<button type="submit" className="business-level-btn">Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-related-container">
				<div className="container-lg">
					<div className="row">
						<div className="col-md-12">
							<RelatedCaseStudyCarousel slug={'klek-services'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default KlekServices