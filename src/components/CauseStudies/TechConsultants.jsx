import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const TechConsultants = () => {

	const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

	return (
		<div className="cause-studies-container">
			<div className="container">
				<div className="row">
					<div className="col-md-6 cause-studies-left">
						<img src={BASE_URL + '/img/yellow-line.png'} alt="yellow-line" className="yellow-line" />
						
						<div className="cause-studies-left-one" style={{backgroundImage: "url("+BASE_URL+"/img/cause-studies-bg.png)"}}>
							<img src={BASE_URL + '/img/TechConsultants.png'} alt="TechConsultants" className="cause-studies-main-img" />
							<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
						</div>

						<div className="cause-studies-left-two">
							<div className="cause-studies-icon-main">
								<img src={BASE_URL + '/img/TechConsultants-icon.png'} alt="TechConsultants Icon" className="cause-studies-icon" />
							</div>

							<div className="cause-studies-boxes">
								<div className="cause-studies-box">
									<h2 className="title">Outcomes</h2>
									<div className="description">
										<p>While still early on in the process, Tech Consultants was able to position their brand online thanks to the lift that Corporality Global provided. With a clear inbound marketing strategy, Tech Consultants’ followers, traffic, and leads continue to grow week on week. </p>
									</div>
								</div>

								<div className="cause-studies-line"></div>
							</div>

							<div className="related-cause-studies-main">
								<div className="related-cause-studies-inner">
									<div className="related-title">Related Cause Studies</div>
									<div className="related-list">
										<ul>
											<li onClick={() => { navigate("/build-q"); topHandle(); }}>Build Q</li>
											<li onClick={() => { navigate("/liqmet"); topHandle(); }}>Liqmet</li>
											<li onClick={() => { navigate("/fastgrow-finance"); topHandle(); }}>Fastgrow Finance</li>
											<li onClick={() => { navigate("/klek-services"); topHandle(); }}>Klek Services</li>
											<li onClick={() => { navigate("/sk-insurance"); topHandle(); }}>SK Insurance</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 cause-studies-right">
						<div className="cause-studies-logo">
							<img src={BASE_URL + '/img/TechConsultants-logo.png'} alt="TechConsultants-logo" className="cause-studies-logo-img" />
						</div>

						<div className="cause-studies-content-container">
							<div className="cause-studies-main-content">
								<div className="heading">
									<h1 className="title">Corporality Global helps position Tech Consultants for success</h1>
									<div className="title-line"></div>
								</div>

								<div className="content">
									<p>Tech Consultants offer flexible recruitment solutions, helping companies of various sizes find the best employees. Corporality Global helped Tech Consultants launch for success with a foolproof Brand Positioning with Business development approach including website design and development services, content and email marketing, search engine optimisation and social media management.</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="glimpses-main">
								<h2 className="title">At a glance</h2>
								<ul>
									<li>Business development strategy</li>
									<li>Search engine optimised website resulting to a 100% increase in visibility</li>
									<li>52-week email strategy forging relationships with business leaders</li>
									<li>High converting website resulting to a 5% increase in conversions from the get-go</li>
								</ul>
							</div>

							<div className="cause-studies-line"></div>

							<div className="cause-studies-content-boxes">
								<div className="content-box">
									<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
									<h2 className="title">Introduction</h2>
									<div className="description">
										<p>Tech Consultants is one of the leading contract and permanent staffing solutions providers in Australia. However, despite its current position in the market, they still needed a lift with improving their presence online since most of their leads come from outbound efforts and other sales-heavy strategies. They knew the potential of inbound marketing and how it can help them position their brand for an even further success. Corporality Global, which is a constant partner for Tech Consultants, was more than happy to do the work and knew what exactly they needed. </p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
									<h2 className="title">Our Approach</h2>
									<div className="description">
										<p><b>Website Design and Development</b></p>
										<p>Websites act as an online billboard and a must-have for any organisation looking to position themselves  online. This is where we started. We conducted an audit of the current Tech Consultants website and found that:</p>
										<ul>
											<li>Its current content needs updating to reflect what they do and have done</li>
											<li>Its current website is not converting as expected and needed to be fine-tuned to create a seamless user experience, guiding them throughout the marketing funnel</li>
											<li>Its website's keywords targeting is outdated and no longer effective in reaching out to its desired audiences</li>
										</ul>
										<p>And so, with Corporality Global’s website blueprint services, the website design and development began. Corporality Global’s goal is simple: to turn Tech Consultant’s website into a high-converting tool that can help educate and generate leads, not merely a simple advertisement online. Separate sections were created in the website for two of Tech Consultant’s major target audience: employers and employees. This is so that they’ll have a more personalized experience when they land on site. Aside from that, lead capture tools were also installed including pop-ups and forms.</p>

										<p><b>Email Marketing</b></p>
										<p>One of the goals of inbound shifting is to create a more human to human experience between a brand and its target audience. This is done by nurturing relationships with timely content and other communications. With this, Corporality Global set out to create a 52-week email marketing strategy for Tech Consultants.</p>
										<p>Each email in the series was tailored for each businessman in Tech Consultant’s ever growing contact list. The content revolved around providing advice and answers to questions they might have regarding recruitment and human resource development. </p>

										<p><b>Social Media and Content Marketing</b></p>
										<p>To drive traffic to Tech Consultants’ website, Corporality Global created social media pages and targeted blogs. Each post was well-thought of and a product of market research. They also employ the right keywords to make sure that each content reaches the right audience at the right time. </p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TechConsultants