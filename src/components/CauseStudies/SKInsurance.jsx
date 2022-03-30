import React from "react";
import './CaseStudy.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const SKInsurance = () => {
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
									<h1>SK Insure delights customers with a renewed digital footprint</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>We worked with SK Insure to create a brand-new content framework that would provide a better consumer experience.</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/SK-Insurance-logo.png'} alt="SK-Insurance-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/SK-Insurance-icon.png'} alt="SK-Insurance-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/SK-Insurance-glance-visibility.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">increase in visibility</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/SK-Insurance-glance-points.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title">Increase in customer experience</div>
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
								<p>The insurance company was in a pickle. It was being challenged by digital natives who were already present on the world wide web and garnering attention and scoring better with the customer.  Unfortunately, the firm was unable to offer the seamless digital experience that customers have grown to expect due to old infrastructure. As a result, they requested Corporality Global to assist them in developing a new strategy to position them as a digital-first company.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p><b>Strategic content tailored for customers:</b> The insurance industry can be complex and hard to understand, especially for beginners. That’s why Corporality Global’s first mission was to create educational content at each stage of the funnel to improve the website user experience for both first time and returning visitors. Each content targeted a specific keyword to boost the brand’s visibility on the search engine results pages.</p>
								<p><b>Timely and educational social media posts:</b> SK Insure also managed to re-introduce its brand online through a series of social media posts that are lighthearted and educational. Corporality Global has developed themes for each day of the posting plan to keep subscribers and prospects informed and in tune to what’s next.</p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>SK Insure collaborated with our integrated team of designers, developers and professionals to break through the clutter of ideas and find tangible sources of agility and competitive advantage for the company. With the content strategy and development in place, SK Insure has improved its week on week views and engagement, and is sure to  skyrocket in the future.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/SK-Insurance.png'} alt="SK-Insurance" />
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
								<img src={BASE_URL + '/img/SK-Insurance-logo.png'} alt="SK-Insurance-logo" className="case-study-testi-logo" />
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
							<RelatedCaseStudyCarousel slug={'sk-insurance'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default SKInsurance