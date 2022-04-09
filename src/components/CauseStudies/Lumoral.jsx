import React from "react";
import './CaseStudy.css'
import { BASE_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const Lumoral = () => {
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
									<h1>Lumoral successfully launches their product in Aus with Go-to-Marketing</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>While Lumoral is a successful innovative product in Europe, they needed a hand raising brand awareness in Australia.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Lumoral-logo.png'} alt="Lumoral-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Lumoral-icon.png'} alt="Lumoral-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/Lumoral-glance-improved.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Improved website for Lumoral Australia</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Lumoral-glance-webinar.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">Webinar series for Lumoral Australia</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Lumoral-glance-marketing.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Data-based approach to paid ads, content and social media marketing</div>
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
								<p>Lumoral is a light-activated medical device that helps prevent gingivitis, periodontitis, tooth decay, and plaque formation.  It was developed by Koite Health, a fast growing health technology company based in Finland.</p>
								<p>While Lumoral’s product is very promising and has a lot of potential to penetrate the Australian medical technology or dental market, they needed a solid strategy to launch their product and introduce it to the market. Thankfully, they approached the perfect partner - Corporality Global.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p>Corporality Global is an international management and marketing consulting firm specializing in niche industries such as medical technology, healthcare and more. For Lumoral’s launch in Australia, Corporality Global created a go-to-market strategy (GTM strategy) to position Lumoral for success.</p>
								<p><b>Go to Marketing Strategy:</b> A go to marketing strategy (GTM strategy) is a plan that outlines how a business will reach out to its target customers and gain a competitive edge. A GTM strategy's goal is to establish a roadmap for delivering a product or service to the end customer, taking into account aspects like pricing and distribution. </p>
								<p>The success of products and services in a new or existing market is driven by a solid GTM strategy. Coordinated messaging, precise product positioning, and a well-defined consumer persona are all critical to a product's or service's market success.</p>
								<p><b>Organic marketing efforts:</b> To target customers where they are and at the right time, Corporality Global has set up various organic marketing efforts such as blogging, social media posting, and hosting webinars. The said strategies revolve around creating educational content to let the public know of some health concerns and how Lumoral can address them.</p>
								<p><b>Targeted paid advertisements:</b> To support organic marketing efforts, Corporality Global also launched paid advertisements on Google and other social media platforms. While getting ads approved for medical devices were faced with some restrictions on social media platforms, Corporality Global’s experts were able to tweak the messaging to be concise, factual and within the guidelines of different social media platforms. </p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>Through the various efforts launched as discussed above, Lumoral was able to convert visitors and social media subscribers into customers. They were also able to build collaborations with Australian dentists as part of their campaign. </p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/Lumoral.png'} alt="Lumoral" />
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
								<img src={BASE_URL + '/img/Lumoral-logo.png'} alt="Lumoral-logo" className="case-study-testi-logo" />
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

export default Lumoral