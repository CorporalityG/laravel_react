import React, { useEffect } from 'react'
import './IndustrialResources.css'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import IndustrialResourceItem from './components/IndustrialResourceItem';

const IndustrialResources = () => {

	useEffect( ()=> {
        Aos.init();
    }, []);

	return (
		<div className="industrial-resources-main">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="industrial-resources-widget" data-aos="fade-up" data-aos-duration="2000">
							<h4 className="widget_heading">Recent Posts</h4>
							<div className="widget_content">
								<ul>
									<li><Link to={`/#`}>Pros and Cons of Branding | Corporality Global</Link></li>
									<li><Link to={`/#`}>ADVANCED BIOMETRICS | Corporality Global</Link></li>
									<li><Link to={`/#`}>Bitcoins – THE EMERGENCE | Corporality Global</Link></li>
									<li><Link to={`/#`}>Augmented Reality in Surgeries | Corporality Global</Link></li>
									<li><Link to={`/#`}>CEOs must adopt these business strategies in 2022 | Corporality Global</Link></li>
								</ul>
							</div>
						</div>

						<div className="industrial-resources-widget" data-aos="fade-up" data-aos-duration="2000">
							<h4 className="widget_heading">Categories</h4>
							<div className="widget_content">
								<ul>
									<li><Link to={`/#`}>Constructions</Link></li>
									<li><Link to={`/#`}>FinTech</Link></li>
									<li><Link to={`/#`}>Meditech</Link></li>
									<li><Link to={`/#`}>Professional Practice</Link></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<IndustrialResourceItem 
                            thumbnail={'/img/Pros-and-Cons-of-Branding.png'}
                            title={'Pros and Cons of Branding | Corporality Global'}
                            description={'When you’re seeking to establish, raise awareness and grow your business, one of the things you turn to is branding. The goal of branding and identity is simple: to create a look and feel that is readily distinct and recognisable by the public.  With good branding, the value of a product and the organisation as a whole can be increased. Think about Starbucks, McDonald’s, Walt Disney, Coca-Cola, and Apple. We bet you thought of their logo just with the mention of their name. That’s what good branding does.'}
                            slug={'pros-and-cons-of-branding-corporality-global'}
                        />

                        <IndustrialResourceItem 
                            thumbnail={'/img/advanced-biomatrics.jpg'}
                            title={'ADVANCED BIOMETRICS | Corporality Global'}
                            description={'“Biometrics” is a monumental part of modern sciences – it defines individuality from a strictly scientific standpoint. If we break down the term into two – “bio” stands for biological and “metrics” stands for measurements. Certain biological measurements help scientists/doctors differentiate us from other human beings. While DNA tests and other genetic tests help us understand complex biological aspects of a human being, there are advanced biometric tests that are used strictly for the identification of people.'}
                            slug={'advanced-biometrics-corporality-global'}
                        />

                        <IndustrialResourceItem 
                            thumbnail={'/img/bitcoins-the-emergence.png'}
                            title={'Bitcoins – THE EMERGENCE | Corporality Global'}
                            description={'Crypto-currencies have been around for almost a decade and a half now in 2022. Bitcoin – the first cryptocurrency was invented about thirteen years ago in 2008 by a group called Satoshi Nakamoto. Bitcoin (BTC) was developed and brought to use after the global market crash in 2008. Initially, it faced a lot of skepticism and criticism by financial critics, and the ideas surrounding it were unconventional to the financial gurus back then.'}
                            slug={'bitcoins-the-emergence-corporality-global'}
                        />
					</div>
				</div>
			</div>
		</div>
	);
}

export default IndustrialResources