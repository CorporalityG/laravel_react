import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const BuildQ = () => {

	const navigate = useNavigate();
    const topHandle = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

	return (
		<div className="cause-studies-container">
			<div className="row">
				<div className="col-md-6 cause-studies-left">
					<img src={BASE_URL + '/img/yellow-line.png'} alt="yellow-line" className="yellow-line" />
					
					<div className="cause-studies-left-one" style={{backgroundImage: "url("+BASE_URL+"/img/cause-studies-bg.png)"}}>
						<img src={BASE_URL + '/img/Build-Q.png'} alt="Build-Q" className="cause-studies-main-img" />
						<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
					</div>

					<div className="cause-studies-left-two">
						<div className="cause-studies-icon-main">
							<img src={BASE_URL + '/img/Build-Q-icon.png'} alt="Build-Q" className="cause-studies-icon" />
						</div>

						<div className="cause-studies-boxes">
							<div className="cause-studies-box">
								<h2 className="title">How did we do it?</h2>
								<div className="description">
									<p>We paid great attention to our client’s front line from the start, understanding that their input was crucial to both designing a new digital model and gaining internal support for it. The company's agents were ecstatic to embrace new technologies that could strengthen client relationships.</p>
									<p>BuildQ’s increased sales team now provides excellent service to both new and existing customers. Over the course the company can see a 10% increase in average sales and an existing potential 5% increase in digital visibility.</p>
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
										{/*<li onClick={() => { navigate("/liqmet"); topHandle(); }}>Liqmet</li>*/}
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
						<img src={BASE_URL + '/img/Build-Q-logo.png'} alt="Build-Q-logo" className="cause-studies-logo-img" />
					</div>

					<div className="cause-studies-content-container">
						<div className="cause-studies-main-content">
							<div className="heading">
								<h1 className="title">Redesigning corporate and operating models to increase sales</h1>
								<div className="title-line"></div>
							</div>

							<div className="content">
								<p>BuildQ Group, a construction company Sydney, is reinvented with the help of a comprehensive corporate strategy that tactically revived growth and strengthened customer communications.</p>

								<h2 className="title">A Quick Look</h2>
								<p>We proposed a new coverage strategy that would provide BuildQ Group’s sales department with a data-driven understanding of their clients, including specific patterns of activity and needs that have to be met.</p>
								<p>Our insights aided the company in developing and reorganizing their plan that would provide optimal levels of attention to each customer, as well as a new set of operational responsibilities that would be appropriate.</p>
							</div>
						</div>

						<div className="cause-studies-line"></div>

						<div className="glimpses-main">
							<h2 className="title">Glimpses</h2>
							<div className="glimpses-boxes">
								<div className="glimpses-box">
									<div className="box-title">5%</div>
									<div className="box-subtitle">Increase in total digital visibility</div>
								</div>

								<div className="glimpses-box">
									<div className="box-title">10%</div>
									<div className="box-subtitle">Projected increase in average sales </div>
								</div>
							</div>
						</div>

						<div className="cause-studies-line"></div>

						<div className="cause-studies-content-boxes">
							<div className="content-box">
								<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
								<h2 className="title">How we helped</h2>
								<div className="description">
									<p>Identifying the right mechanisms and operating them in a purposeful, coordinated manner is often required for growth. We assisted BuildQ Australia in evaluating and ultimately redesigning its digital front in order to gain new customers while increasing the value of new customer relationships.</p>
									<p>Our strategy began with a review of BuildQ's current customer base. We looked at the company's network of distribution partners, and segmented customers by area to find sales gaps. The company was  frequently wasting their efforts and missing out on significant possibilities that were there in front of them.</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="content-box">
								<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
								<h2 className="title">Our Approach</h2>
								<div className="description">
									<p>We proposed a new strategy that included the intended maturation modeling and methodology. With this, we demonstrated how a restructuring of the company’s digital presence, and corporate culture would target prospective new markets while using data on new house constructions and other commercial activities. We also recommended that the company should provide its sales force with a data-driven understanding of its clients, including unique patterns of behaviour and unmet needs.</p>
									<p>We created an analytical model that could compute what maximum potential might look like for any specific consumer based on attributes shared with us. This research was carried out by product category and region to see where the company had the most room for expansion. We also predicted the product-level sales pitch that would most likely succeed with each underserved consumer. While importing the model’s output into a digital display, we also allowed the promotion of front-line adoption.</p>
									<p>Our research indicated a wide range of tastes among BuildQ’s customers especially since they were also able to start their real-estate division.. We discovered that some accounts desired more regular in-person visits, while others wanted less, based on focus groups and sales statistics. With this data, we were able to assist the company in developing and restructuring strategies that would ensure that each customer received the maximum amount of attention possible. We devised a new set of operational responsibilities that were suited for their target client base. Overall, their growth was boosted by around 15% as a result of our proposal, and additional support functions, including an operations analytics team was put in place for them.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BuildQ