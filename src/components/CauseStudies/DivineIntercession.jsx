import React from "react";
import './CauseStudies.css'
import { API_BASE_URL, BASE_URL, API_IMG_URL } from '../../config';
import { useNavigate } from "react-router";

const DivineIntercession = () => {

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
							<img src={BASE_URL + '/img/Divine-Intercession.png'} alt="Divine-Intercession" className="cause-studies-main-img" />
							<img src={BASE_URL + '/img/white-vector.png'} alt="white-vector" className="white-vector" />
						</div>

						<div className="cause-studies-left-two">
							<div className="cause-studies-icon-main">
								<img src={BASE_URL + '/img/Divine-Intercession-icon.png'} alt="Divine-Intercession" className="cause-studies-icon" />
							</div>

							<div className="cause-studies-boxes">
								<div className="cause-studies-box">
									<h2 className="title">The beginning</h2>
									<div className="description">
										<p>With our Corporate Strategy, using the intended maturation model we first performed a comprehensive audit and assessed the current position of the organisation. We set aggressive timelines to hit marketing and saleability targets while staying highly focused on expanding the customer and sponsorship bases.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="cause-studies-box">
									<h2 className="title">Recommendations</h2>
									<div className="description">
										<p>Corporality worked closely with Divine Intercession Australia to develop the following recommendations:</p>
										<p>To design a set of commercial objectives that would help the NGO make its need for funds known</p>
										<p>To rigorously analyze territories, product coverage, connectivity, compensation and develop a tactical plan to connect with a more relevant audience</p>
										<p>To incorporate the best mix of talent to bring optimal results across the NGO's digital presence</p>
										<p>Executive-level decision mechanisms were put in place to resolve issues and guide analysts as they arose</p>
									</div>
								</div>
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
							<img src={BASE_URL + '/img/Divine-Intercession-logo.png'} alt="Divine-Intercession-logo" className="cause-studies-logo-img" />
						</div>

						<div className="cause-studies-content-container">
							<div className="cause-studies-main-content">
								<div className="heading">
									<h1 className="title">The Intended Maturation Model helps an NGO get back on track and achieve consistent success in receiving much-needed monetisation.</h1>
									<div className="title-line"></div>
								</div>

								<div className="content">
									<p>The continued success of an institution such as an NGO completely depends upon funding, donations and product purchases preferably from the organisation's portal. For Divine Intercession Australia there was very little hope. The NGO unit was hard-strapped for funds and could gather some or no customer attention towards itself. As part of a marathon strategy, Corporality worked across complex hurdles with the entity to build a unified force of growth.</p>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="glimpses-main">
								<h2 className="title">Glimpses of success</h2>
								<div className="glimpses-boxes">
									<div className="glimpses-box">
										<div className="box-title">100%</div>
										<div className="box-subtitle">increase in views across all channels</div>
									</div>

									<div className="glimpses-box">
										<div className="box-title">2%</div>
										<div className="box-subtitle">with at least a 2% growth in revenue</div>
									</div>
								</div>
							</div>

							<div className="cause-studies-line"></div>

							<div className="cause-studies-content-boxes">
								<div className="content-box">
									<img src={BASE_URL + '/img/chart-icon.png'} alt="chart-icon" className="middle-icon chart-icon" />
									<h2 className="title">Current Circumstances</h2>
									<div className="description">
										<p>Divine Intercession Australia, an NGO, extends a helping hand to various classes in society, including immigrants seeking assistance in a foreign land. The institution under the leadership of Joseph Sesay also caters to other religious causes including demonic vindication while also trying to provide for basic needs such as food, clothing and water to those in need within and outside the community. However, the institution was suffering due to the lack of funds, which was a direct result of the lack of widespread awareness amongst people. The small audience was not enough to propagate what Divine intended to do on a much larger scale. Besides, they did not have the kind of internal strength to execute and implement their goals and objectives that was so crucial for their growth.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/setting-icon.png'} alt="setting-icon" className="middle-icon setting-icon" />
									<h2 className="title">Our Approach</h2>
									<div className="description">
										<p>While re-establishing the NGO's vision,  we planned every single task in accordance with their budget    and stabilized resources within and outside the organisation to steer their end goals. An optimal mix of designers, developers and writers was used to capture the synergies.</p>
										<p>Identifying existing state of affairs:  A comprehensive assessment of the products sold, the territories they covered and customers they targeted were gathered. We also assessed the current state of digital and social media marketing including their YouTube Australia activity. </p>
										<p>Engaging with the leadership: We connected with the stakeholder(s) of the institution to develop and frame an integrated methodology while also analysing various options for their future digital state.</p>
										<p>Implementing the semantics: The result and inference of the analysis was then put through a disciplined pathway that would impact customers, territories and products and ensure recognition amongst a greater target audience.</p>
										<p>Launch: All synergies were achieved within the timeline where a new set of roles and responsibilities evolved while the key stakeholder(s) got clear communication about institutional plans and requirements.</p>
									</div>
								</div>

								<div className="cause-studies-line"></div>

								<div className="content-box">
									<img src={BASE_URL + '/img/write-icon.png'} alt="write-icon" className="middle-icon write-icon" />
									<h2 className="title">The Results</h2>
									<div className="description">
										<p>Within a year of planning there was a steady increase in all social media visibility, engagements, which resulted in growth of brand positioning. Guided by a new plan, the organisation was able to incorporate sales enablement tools including revised training programmes that realised net synergies of up to a 100% increase in their digital presence. Besides, sales orders began to increase gradually resulting in a growth in revenue of up to 2%. </p>
										<p>Corporality thus established a strong working relationship with Divine Intercession Australia and continues to service their noble cause. </p>
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

export default DivineIntercession