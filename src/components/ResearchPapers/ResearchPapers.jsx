import React, { useEffect } from 'react'
import './ResearchPapers.css'
import { Link } from 'react-router-dom';
import ResearchPaperItem from './components/ResearchPaperItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ResearchPapers = () => {

	useEffect( ()=> {
        Aos.init();
    }, []);

	return (
		<div className="research-papers-main">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="research-papers-widget" data-aos="fade-up" data-aos-duration="2000">
							<h4 className="widget_heading">Recent Research Paper</h4>
							<div className="widget_content">
								<ul>
									<li><Link to={`/#`}>Overriding the challenges of marketing for the healthcare industry</Link></li>
									<li><Link to={`/#`}>Marketing Strategies for Hemp</Link></li>
									<li><Link to={`/#`}>Renewable Energy Marketing</Link></li>
									<li><Link to={`/#`}>Conceptualising the high tech market</Link></li>
									<li><Link to={`/#`}>The difficulty of marketing for IT companies and how to over come it – a guide</Link></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="col-md-8">
						<ResearchPaperItem 
                            thumbnail={'/img/overriding-the-challenges-of-marketing-for-the-healthcare-industry.jpg'}
                            title={'Overriding the challenges of marketing for the healthcare industry'}
                            description={'Executive Summary The Healthcare industry is the industry which deals with companies that provide medical offerings, manufacture tablets and clinical equipment and offer healthcare-associated assist offerings like clinical insurance. These companies perform a crucial position in diagnosing, nursing, and controlling...'}
                            slug={'overriding-the-challenges-of-marketing-for-the-healthcare-industry'}
                        />

                        <ResearchPaperItem 
                            thumbnail={'/img/marketing-strategies-for-hemp.jpg'}
                            title={'Marketing Strategies for Hemp'}
                            description={'Executive Summary Hemp is a plant. It is an identical species of plant called cannabis. But in contrast to cannabis, Hemp carries shallow ranges of tetrahydrocannabinol (THC), much less than 0.3%. It is criminal to promote hemp and hemp merchandise...'}
                            slug={'marketing-strategies-for-hemp'}
                        />

                        <ResearchPaperItem 
                            thumbnail={'/img/renewable-energy-marketing.jpg'}
                            title={'Renewable Energy Marketing'}
                            description={'Executive Summary Renewable energy is the source of power that encompasses sun power, wind power, geothermal power, and hydroelectric energy. Renewable sources are frequently related to green or clean energy.  Where renewable energy is the ones that can be recyclable,...'}
                            slug={'renewable-energy-marketing'}
                        />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResearchPapers