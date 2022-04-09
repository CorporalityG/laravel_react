import React from "react";
import './CaseStudy.css'
import { BASE_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const TechConsultants = () => {
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
									<h1>Corporality Global helps position Tech Consultants for success</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>Tech Consultants offer flexible recruitment solutions, helping companies of various sizes find the best employees. Corporality Global helped Tech Consultants launch for success with a foolproof Brand Positioning with Business development approach including website design and development services, content and email marketing, search engine optimisation and social media management.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/TechConsultants-logo.png'} alt="TechConsultants-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/TechConsultants-icon.png'} alt="TechConsultants-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/TechConsultants-glance-visibility.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">In visibility</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/TechConsultants-glance-conversions.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">In conversions from the get-go</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/TechConsultants-glance-weeks.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">Email strategy forging relationships with business leaders</div>
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
								<p>Tech Consultants is one of the leading contract and permanent staffing solutions providers in Australia. However, despite its current position in the market, they still needed a lift with improving their presence online since most of their leads come from outbound efforts and other sales-heavy strategies. They knew the potential of inbound marketing and how it can help them position their brand for an even further success. Corporality Global, which is a constant partner for Tech Consultants, was more than happy to do the work and knew what exactly they needed.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p><b>Website Design and Development</b></p>
								<p>Websites act as an online billboard and a must-have for any organisation looking to position themselves  online. This is where we started. We conducted an audit of the current Tech Consultants website and found that:</p>
								<ul>
									<li>Its current content needs updating to reflect what they do and have done</li>
									<li>Its current website is not converting as expected and needed to be fine-tuned to create a seamless user experience, guiding them throughout the marketing funnel</li>
									<li>Its website’s keywords targeting is outdated and no longer effective in reaching out to its desired audiences</li>
								</ul>
								<p>And so, with Corporality Global’s website blueprint services, the website design and development began. Corporality Global’s goal is simple: to turn Tech Consultant’s website into a high-converting tool that can help educate and generate leads, not merely a simple advertisement online. Separate sections were created in the website for two of Tech Consultant’s major target audience: employers and employees. This is so that they’ll have a more personalized experience when they land on site. Aside from that, lead capture tools were also installed including pop-ups and forms.</p>

								<p><b>Email Marketing</b></p>
								<p>One of the goals of inbound shifting is to create a more human to human experience between a brand and its target audience. This is done by nurturing relationships with timely content and other communications. With this, Corporality Global set out to create a 52-week email marketing strategy for Tech Consultants.</p>
								<p>Each email in the series was tailored for each businessman in Tech Consultant’s ever growing contact list. The content revolved around providing advice and answers to questions they might have regarding recruitment and human resource development.</p>

								<p><b>Email Marketing</b></p>
								<p>To drive traffic to Tech Consultants’ website, Corporality Global created social media pages and targeted blogs. Each post was well-thought of and a product of market research. They also employ the right keywords to make sure that each content reaches the right audience at the right time. </p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>To drive traffic to Tech Consultants’ website, Corporality Global created social media pages and targeted blogs. Each post was well-thought of and a product of market research. They also employ the right keywords to make sure that each content reaches the right audience at the right time. </p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/TechConsultants.png'} alt="TechConsultants" />
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
								<img src={BASE_URL + '/img/TechConsultants-logo.png'} alt="TechConsultants-logo" className="case-study-testi-logo" />
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
							<RelatedCaseStudyCarousel slug={'tech-consultants'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default TechConsultants