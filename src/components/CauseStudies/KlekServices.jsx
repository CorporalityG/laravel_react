import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const KlekServices = () => {

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
							<img src={BASE_URL + '/img/Klek-Services.png'} alt="Klek Services" className="cause-studies-main-img" />
							<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
						</div>

						<div className="cause-studies-left-two">
							<div className="cause-studies-icon-main">
								<img src={BASE_URL + '/img/Klek-Services-icon.png'} alt="Klek Services Icon" className="cause-studies-icon" />
							</div>

							<div className="cause-studies-boxes">
								<div className="cause-studies-box">
									<h2 className="title">Outcomes</h2>
									<div className="description">
										<p>Our strategy was hinged on creating greater portfolio value and aligning management on strategic priorities while helping them focus on innovation. With our support a value proposition automatically evolved defining the full potential of the business.</p>
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
											{/*<li onClick={() => { navigate("/liqmet"); topHandle(); }}>Liqmet</li>*/}
											<li onClick={() => { navigate("/fastgrow-finance"); topHandle(); }}>Fastgrow Finance</li>
											<li onClick={() => { navigate("/sk-insurance"); topHandle(); }}>SK Insurance</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 cause-studies-right">
						<div className="cause-studies-logo">
							<img src={BASE_URL + '/img/Klek-Services-logo.png'} alt="Klek-Services-logo" className="cause-studies-logo-img" />
						</div>

						<div className="cause-studies-content-container">
							<div className="cause-studies-main-content">
								<div className="heading">
									<h1 className="title">Using a Digital-First Approach to restore customer advocacy</h1>
									<div className="title-line"></div>
								</div>

								<div className="content">
									<p>Customer centricity meant embracing digitalisation for Klek Services that was stuck in the past.</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="glimpses-main">
								<h2 className="title">At a glance</h2>
								<div className="glimpses-boxes">
									<div className="glimpses-box">
										<div className="box-title">100%</div>
										<div className="box-subtitle">growth in brand recall</div>
									</div>

									<div className="glimpses-box">
										<div className="box-title">150</div>
										<div className="box-subtitle">point increase in customer experience</div>
									</div>

									<div className="glimpses-box">
										<div className="box-title">13%</div>
										<div className="box-subtitle">gain in inquiries from the web</div>
									</div>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="cause-studies-content-boxes">
								<div className="content-box">
									<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
									<h2 className="title">Introduction</h2>
									<div className="description">
										<p>Klek services was using outdated service channels before they approached us with a need to upgrade their current web presence with a more modern and optimised one.  They required assistance in creating a more seamless, interactive consumer experience. We achieved this by delivering a digitalisation roadmap that increased customer advocacy, online experiences, and sales during the first year of the engagement.</p>
										<p>The internet is a key driver of growth and more so, the digital presence of a company. For klek services, though, this was a weak spot. The company was not meeting expectations in terms of functionality, reliability and speed. There was a need to curate a brand that would help them build relationships with their audience and deliver a positive experience.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
									<h2 className="title">Our Approach</h2>
									<div className="description">
										<p>We first embarked on a brand positioning journey with authenticity in mind. The principles we applied are available everywhere - as industry best practices- while the nuances and details varied. “Facts tell, Stories Sell’ this is what the design team at Corporality fixated itself on as they found reason beyond reason to come up with a unique and sleek branding design for klek services. Thereafter, a customer experience transformation plan was drawn to create a digital-first enterprise that could significantly improve service personalisation.</p>
										<p>It was now time to implement the interactive blueprint strategy. Corporality’s fast-growing team of innovators began identifying growth opportunity areas and generated a roster of solutions that can be offered by klek services. Quick experiments would determine which ones required more time before scaling ideas. We prioritised all project deliverables while getting a grasp on customer advocacy, which differentiated our approach. With our digital-first focus, customer interactions were all set to improve with a positive momentum and uplift. It was as if for the first time, the leadership got a unified and precise view of the current state of affairs versus where it should have been. </p>
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

export default KlekServices