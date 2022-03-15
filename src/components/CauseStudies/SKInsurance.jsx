import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const SKInsurance = () => {

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
							<img src={BASE_URL + '/img/SK-Insurance.png'} alt="SK Insurance" className="cause-studies-main-img" />
							<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
						</div>

						<div className="cause-studies-left-two">
							<div className="cause-studies-icon-main">
								<img src={BASE_URL + '/img/SK-Insurance-icon.png'} alt="SK Insurance Icon" className="cause-studies-icon" />
							</div>

							<div className="cause-studies-boxes">
								<div className="cause-studies-box">
									<h2 className="title">Outcomes</h2>
									<div className="description">
										<p>With our new architecture, the percentage of visitors and consumer contacts will skyrocket. When completely integrated, the organisation will be better prepared for a market dominated by high-end websites. With these solutions in place, the firm will be able to focus on new ideas such as usage-based insurance and linked devices, as a potential offer in the future.</p>
										<p>SK Insurance collaborated with our integrated team of designers, developers and professionals to evaluate the complete set of solutions to develop workable prototypes. We were able to determine the work and time necessary to develop a new website and offer innovative UI/UX and scalability with our plan. We were able to break through the clutter of ideas and find tangible sources of agility and competitive advantage forSK Insurance in the future.</p>
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
											<li onClick={() => { navigate("/klek-services"); topHandle(); }}>Klek Services</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 cause-studies-right">
						<div className="cause-studies-logo">
							<img src={BASE_URL + '/img/SK-Insurance-logo.png'} alt="SK Insurance logo" className="cause-studies-logo-img" />
						</div>

						<div className="cause-studies-content-container">
							<div className="cause-studies-main-content">
								<div className="heading">
									<h1 className="title">Corporality helps SK Insurance delight customers with a renewed digital footprint</h1>
									<div className="title-line"></div>
								</div>

								<div className="content">
									<p>We worked with SK Insurance to create a brand-new interactive blueprint that would provide a better consumer experience. When finished, the new digital architecture will have increased the visibility of the company ten-fold</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="glimpses-main">
								<h2 className="title">At a glance</h2>
								<div className="glimpses-boxes">
									<div className="glimpses-box">
										<div className="box-title">10x</div>
										<div className="box-subtitle">increase in visibility</div>
									</div>

									<div className="glimpses-box">
										<div className="box-title">100</div>
										<div className="box-subtitle">point increase in web traffic</div>
									</div>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="cause-studies-content-boxes">
								<div className="content-box">
									<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
									<h2 className="title">Introduction</h2>
									<div className="description">
										<p>The insurance company was in a pickle. It was being challenged by digital natives who were already present on the world wide web and garnering attention and scoring better with the customer.  Unfortunately, the firm was unable to offer the seamless digital experience that customers have grown to expect due to old infrastructure. As a result, they requested us to assist them in developing a new strategy to position them as a digital-first company. Following a review of incremental ways to improve old systems, if any, the objective was established to create an entirely new digital platform that would provide a greater client experience.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
									<h2 className="title">Our Approach</h2>
									<div className="description">
										<p>We utilised our Interactive Blueprint technique to turn strategic use cases into requirements and choose the platform on which the company could display customer-centric products that would shape the industry's future. When completed, the new digital chassis would see a 10-fold increase in visibility and a 100-point increase in web traffic.</p>
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

export default SKInsurance