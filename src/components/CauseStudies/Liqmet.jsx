import React from "react";
import './CaseStudy.css'
import { BASE_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const Liqmet = () => {
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
									<h1>Digital transformation improves liquid metal company’s marketing performance</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>LIQMET liquid metal company worked with Corporality Global to create a brand-new platform that would provide a better consumer experience. We delivered through the Interactive Blueprint strategy.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Liqmet-logo.png'} alt="Liqmet-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Liqmet-icon.png'} alt="Liqmet-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/Liqmet-glance-rebound.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Rebound in consumer experience</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Liqmet-glance-growth.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">visibility growth</div>
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
								<p>LIQMET, a  liquid metal company, was operating in a niche where competition may seem limited but is rather fierce. The company was unable to provide the smooth digital experience that customers have grown to expect. This is due to an old infrastructure that was non-optimised for a modern digitised presence. As a result, they asked Corporality Global to assist them in developing a new strategy to position them as a digital-first company. Following a review of incremental ways to improve old systems, the goal was set to create an entirely new platform that would provide a greater client experience.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p><b>Laying the groundwork:</b> We used our Interactive Blueprint method to turn strategic use cases into requirements and choose the platform on which LIQMET could create the customer-centric features that will shape the industry's future. The plan was completely customised to reduce risks and provide the company with the required competitive edge.</p>
								<p><b>Establishing the brand:</b> Corporality Global brought together a team of experts inclusive of designers, developers, and writers to draft a strategic master plan that would empower branding messages to provide outstanding branding results. While using the most up-to-date technology stack promises high-voltage results, we also made sure that the transition from one version to the next is as seamless as possible. Once completed, the new platform would become a slick sales conversion funnel allowing for sophisticated pricing and cross-selling.</p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>LIQMET’s new platform dramatically increased the percentage of visitors and customer interactions. The company was now better equipped to rule by price comparison and the solution further let them focus on other innovations. The key to our blueprint selection was the integrated team of experts at Corporality Global who also enabled us to understand the time and effort required to deliver the innovation.</p>
								<p>We put LIQMET in a position where it could lead industry disruption instead of becoming its victim.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/Liqmet.png'} alt="Liqmet" />
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
								<img src={BASE_URL + '/img/Liqmet-logo.png'} alt="Liqmet-logo" className="case-study-testi-logo" />
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
							<RelatedCaseStudyCarousel />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default Liqmet