import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const MeyerWest = () => {
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
									<h1>Meyer West IP improves website traffic with strategized blog posting and SEO</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>Meyer West IP is an Intellectual Property firm based in the Hills District of Sydney. They provide patent application and other intellectual property services to clients throughout the Sydney metropole and New South Wales. They sought help from Corporality Global to improve their website traffic through targeted content and search engine optimisation.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/meyer-west-logo.png'} alt="meyer-west-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/meyer-west-icon.png'} alt="meyer-west-icon" className="case-study-icon" />
							</div>
						</div>
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
								<img src={BASE_URL + '/img/meyer-west-glance-growth.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Growth in traffic year on year</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/meyer-west-glance-backlinks.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">New backlinks</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								
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
								<h2>The challenge</h2>
								<p>Meyer West IP’s services are specifically targeted to those who are needing guidance on patent and intellectual property. Because of this highly-niche market, it is difficult to find a partner who will be able to help them break down complex information into educational pieces that will be useful for their audience. This is where Corporality Global came in. </p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p><b>Content Marketing:</b> Content marketing is a strategic marketing technique that focuses on producing and delivering valuable, relevant, and consistent content. Its aim is to attract and maintain a specific audience and  eventually, to drive profitable consumer action.</p>
								<p>Corporality Global, an international marketing and management consulting firm, are experts in capitalising content to drive awareness and in the long run, revenue. They were quick enough to create a well-thought out content marketing strategy for Meyer West and started crafting targeted pieces that aim to inform and drive conversions.</p>
								<p><b>Search engine optimisation:</b> Simply put, search engine optimisation involves strategies to make a web page rank higher on search engine results pages such as Google. Corporality Global did for Meyer West through generating backlinks, improving the website’s meta data and targeting specific keywords for the blogs. </p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>Thanks to Corporality Global and Meyer West’s partnerships, the leading trademark attorneys were able to increase their website traffic, gain more backlinks, and provide useful content to both prospects and existing customers. There’s a steady growth of at least 38% in traffic year on year, while the team is regularly on the lookout for quality backlinks.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/meyer-west.png'} alt="meyer-west" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="case-study-outcome-container">
				<div className="container">
					<div className="row">
						<div className="col-md-8 offset-4">
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
								<img src={BASE_URL + '/img/meyer-west-logo.png'} alt="meyer-west-logo" className="case-study-testi-logo" />
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
										<div className="col-md-6 form-group">
											<input type="text" className="form-control" placeholder="Name" />
										</div>
										<div className="col-md-6 form-group">
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
				<div className="container">
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

export default MeyerWest