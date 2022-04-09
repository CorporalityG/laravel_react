import React from "react";
import './CaseStudy.css'
import { BASE_URL } from '../../config';
import RelatedCaseStudyCarousel from "./RelatedCaseStudyCarousel";

const FastgrowFinance = () => {
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
									<h1>Unique brand positioning helps Fastgrow Finance break new ground</h1>
									<div className="title-line"></div>
								</div>
								<div className="content">
									<p>Corporality Global created a unique brand positioning that would extend the company’s reach into the market</p>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-logo-main">
								<img src={BASE_URL + '/img/Fastgrow-Finance-logo.png'} alt="Fastgrow-Finance-logo" className="case-study-logo" />
								<img src={BASE_URL + '/img/Fastgrow-Finance-icon.png'} alt="Fastgrow-Finance-icon" className="case-study-icon" />
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
								<img src={BASE_URL + '/img/Fastgrow-Finance-glance-visibility.png'} alt="Clients inquiry" />
								<div className="case-study-glance-box-title">In Visibility</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">
								<img src={BASE_URL + '/img/Fastgrow-Finance-glance-revenue.png'} alt="platform increasing" />
								<div className="case-study-glance-box-title"> Increase in revenue</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-glance-box">

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
								<p>Fastgrow Finance is a mortgage broking and consulting firm for clients in NSW and across Australia. To preserve category leadership, Fastgrow Finance needed to revamp its brand positioning.  The company wanted to stand out from the crowd while also underlining its particular positioning. It also required a strategy that would not only bring their brand to life, but would also appeal to their target demographic.</p>

								<img src={BASE_URL + '/img/setting-icon.png'} alt="The solution" />
								<h2>The solution</h2>
								<p>While there are several positioning strategies, not all of them complement a financial services firm. Having defined the business imperatives, Corporality Global understood the company’s business goals and formulated a positioning with a clear destination in mind.</p>
								<p><b>Comprehensive brand research:</b> With our comprehensive brand research, we identified the company’s strengths that weren’t visualised before. </p>
								<p><b>Crystallization workshops and focus groups</b> were held to develop a new brand template that focused on distinguishing emotional and pleasure benefits while also basing some of the values in the context that modern customers seek. Recommendations also suggested possible brand extension regions in order to maximise category dominance.</p>
								<p><b>Complete brand strategy:</b> The brand strategy that evolved was scalable and meant to adjust to changing market scenarios. It was strengthened in a way that competitors entering the fray could not disrupt the positioning. Besides, we also targeted a particular function within the organisation to provide role-focused specialised strategies so that buyers could perceive that the company and its stakeholders were actually tuned in to their needs. </p>

								<img src={BASE_URL + '/img/write-icon.png'} alt="The outcome" />
								<h2>The outcome</h2>
								<p>Fastgrow was able to instantly stand out from the crowd with our brand positioning strategy. The company was also able to efficiently and effectively communicate with its target audience and trigger an emotional response by pulling the right levers in the shortest amount of time.</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="case-study-content-img">
								<img src={BASE_URL + '/img/Fastgrow-Finance.png'} alt="Fastgrow-Finance" />
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
								<img src={BASE_URL + '/img/Fastgrow-Finance-logo.png'} alt="Fastgrow-Finance-logo" className="case-study-testi-logo" />
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
							<RelatedCaseStudyCarousel slug={'fastgrow-finance'} />
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}

export default FastgrowFinance