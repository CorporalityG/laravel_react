import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const Liqmet = () => {

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
							<img src={BASE_URL + '/img/Liqmet.png'} alt="Liqmet" className="cause-studies-main-img" />
							<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
						</div>

						<div className="cause-studies-left-two">
							<div className="cause-studies-icon-main">
								<img src={BASE_URL + '/img/Liqmet-icon.png'} alt="Liqmet Icon" className="cause-studies-icon" />
							</div>

							<div className="cause-studies-boxes">
								<div className="cause-studies-box">
									<h2 className="title">Outcomes</h2>
									<div className="description">
										<p>Liqmet’s new platform dramatically increased the percentage of visitors and customer interactions. The company was now better equipped to rule by price comparison and the solution further let them focus on other innovations. The key to our blueprint selection was the integrated team of experts at Corporality who also enabled us to understand the time and effort required to deliver the innovation.</p>
										<p>We put LIQMET in a position where it could lead industry disruption instead of becoming its victim.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>
							</div>

							<div className="related-cause-studies-main">
								<div className="related-cause-studies-inner">
									<div className="related-title">Related Cause Studies</div>
									<div className="related-list">
										<ul>
											<li onClick={() => { navigate("/divine-intercession"); topHandle(); }}>Divine Intercession</li>
											<li onClick={() => { navigate("/build-q"); topHandle(); }}>Build Q</li>
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
							<img src={BASE_URL + '/img/Liqmet-logo.png'} alt="Liqmet-logo" className="cause-studies-logo-img" />
						</div>

						<div className="cause-studies-content-container">
							<div className="cause-studies-main-content">
								<div className="heading">
									<h1 className="title">Digital Transformation enables a liquid metal company to create better visibility while delighting customers</h1>
									<div className="title-line"></div>
								</div>

								<div className="content">
									<p>Corporality’s Interactive Blueprint strategy delivers an entirely new digital footprint </p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="glimpses-main">
								<h2 className="title">At a glance</h2>
								<p>We worked with a liquid metal company to create a brand-new platform that would provide a better consumer experience. When finished, the new digital architecture will save LIQMET greatly annual costs in areas like operations and IT. </p>
								<div className="glimpses-boxes">
									<div className="glimpses-box">
										<div className="box-title">200%</div>
										<div className="box-subtitle">Rebound in consumer experience</div>
									</div>

									<div className="glimpses-box">
										<div className="box-title">100%</div>
										<div className="box-subtitle">Visibility growth</div>
									</div>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="cause-studies-content-boxes">
								<div className="content-box">
									<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
									<h2 className="title">Introduction</h2>
									<div className="description">
										<p>Liqmet was operating in a niche where competition may seem limited but is rather fierce. It was facing a terrifying challenge from digital natives who were promising three times the output. This happened in a price-driven business where competitors were rushing to cut rates while delivering poor service. The company was unable to provide the smooth digital experience that customers have grown to expect due to an old infrastructure that was non-optimised for a modern digitalised presence.. As a result, they asked us to assist them in developing a new strategy to position them as a digital-first company. Following a review of incremental ways to improve old systems, the goal was set to create an entirely new platform that would provide a greater client experience.</p>
										<p>We used our Interactive Blueprint method to turn strategic use cases into requirements and choose the platform on which Liqmet could create the customer-centric features that will shape the industry's future. The plan was completely customised to reduce risks and provide the company with the required competitive edge.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
									<h2 className="title">Our Approach</h2>
									<div className="description">
										<p>Corporality brought together a team of experts inclusive of designers, developers, and writers to draft a strategic master plan that would empower branding messages to provide outstanding branding results. While using the most up-to-date technology stack to beget high-voltage results, we also made sure that the transition from one version to the next is as seamless as possible. Once completed the new platform would become a slick sales conversion funnel allowing for sophisticated pricing and cross-selling.</p>
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

export default Liqmet