import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const XDesign = () => {

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
									<h1>Capability building helps Xdesigns fill resource gaps</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>With growth comes the need to expand Xdesigns’ team and it’s all possible thanks to management consulting and outsourced executive services.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/XDesign-logo.png'} alt="XDesign-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/XDesign-icon.png'} alt="XDesign-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/XDesign-glance-talent.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Improvement in talent acquisition</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/XDesign-glance-capability.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">Capability gap filled at the soonest possible time</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/XDesign-glance-seat.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">New right talent at the right seat</div>
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
								<p>Xdesigns is one of the renowned creative agencies in Sydney and Brisbane. They support clients by providing branding, creative and logo design and other digital marketing and design services.</p>
								<p>As one of the best creative agencies in Sydney and Brisbane, Xdesigns are sure to position for even further growth. However, with more projects and clients coming in, they needed some hand with capability building. </p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p>Corporality Global is no stranger to problems associated with growth. That is why we seek to help businesses with capability building and other management consulting services. </p>
								<p>When done correctly, capability building leads to increased performance on both an individual and organizational level. The majority of firms today associate capability development with improved performance, while many still lack reliable metrics to assess this impact. Corporality Global draws capability development processes and systems based on data and experiential narratives by existing resources. Together with Xdesigns’ outstanding team, we partnered to build a solid capability development plan in place. Here’s a glimpse of the process.</p>
								<ul>
									<li>We use data to benchmark both individuals and organizations needs, and then collaborate with Xdesigns to develop a solution.</li>
									<li>Based on data, we seek to fill the gap by onboarding new members.</li>
									<li>To improve the capability of existing talents, Corporality Global and Xdesigns also set out to develop employee welfare policies and procedures.</li>
									<li>An ongoing partnership is forged to constantly evaluate systems and adjust to fill the gap as needed.</li>
								</ul>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>Through Corporality Global and Xdesigns’ partnership, the latter was able to fill in the capabilities they needed as their business grew. </p>
								<ul>
									<li>Xdesigns was able to fill multiple positions to fulfill the capability gap at the soonest possible time with the help of Corporality Global.</li>
									<li>Corporality helped the right talent for the right seat to work and coordinate with Xdesigns for employee strength alignment.</li>
									<li>Employee retention improved with proper welfare programs in place.</li>
								</ul>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/XDesign.png'} alt="XDesign" />
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
								<img src={BASE_URL + '/img/XDesign-logo.png'} alt="XDesign-logo" className="case-study-testi-logo" />
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

export default XDesign