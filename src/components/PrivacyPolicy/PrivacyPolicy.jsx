import React from 'react'
import './PrivacyPolicy.css'
import { BASE_URL } from '../../config'
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>{`Privacy Policy | Corporality`}</title>
        <meta name="description" content={`If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at info@corporality.global.`} />
        <link rel="canonical" href={`${BASE_URL}/privacy-policy/`} />
      </Helmet>

      <div className="privacy-policy-section">
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-1.png`} alt="Rec 1" className="rec-1" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-2.png`} alt="Rec 2" className="rec-2" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-3.png`} alt="Rec 3" className="rec-3" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/rec-4.png`} alt="Rec 4" className="rec-4" />

        <img src={`${BASE_URL}/img/PrivacyPolicy/vector.png`} alt="vector" className="vector" />
        <img src={`${BASE_URL}/img/PrivacyPolicy/bottom-vector.png`} alt="bottom-vector" className="bottom-vector" />

        <div className="container">
          <div className="row privacy-policy-row">
            <div className="col-lg-12 px-0">
              <div className="row pp-heading-row">
                <div className="col-lg-8">
                  <div className="pp-heading-content">
                    <h1>Privacy Policy</h1>
                    <p>Corporality Global understands the importance of individual and corporate privacy and is committed to protecting it. This Privacy Policy explains the scope and limit of the company's data collection, why it is needed, and how it is used. </p>
                    <br></br>
                    <p>Last updated on May 2022</p>
                    <br></br>
                    <p>This Privacy Policy is under the Corporality Terms and Conditions and applies to the website(s), and other products and services (collectively, the "Services") provided by Corporality Global ("Corporality", “we”, “us”), a company headquartered in Sydney, New South Wales, Australia, who act as data collectors[1] with respect to the information you share with Corporality.</p>
                    <br></br>
                    <p>The Site is registered as corporality.global and is managed by Corporality.</p>
                    <br></br>
                    <p>We understand the value of everyone's privacy and are committed to taking strict measures to ensure security over your personal data (i.e. any information you provide that will be used to identify you) in accordance with this Privacy Policy.</p>
                    <br></br>
                    <p>Corporality reserves the right to alter and update this Privacy Policy from time to time. When a new Policy is implemented, you will receive an email (if you have agreed to provide an email address) or update the notice on our Services Page. We therefore encourage you to review the current version of the Privacy Policy each time you return to our Sites or engage with us to stay notified. Continued use of our Services after updates come into effect implies concurrence with any revisions made to the Privacy Policy.</p>
                    <br></br>
                    <p>Corporality defines some terms throughout this Policy. Words in bold can be clicked to view their definition. Otherwise, there is a short glossary at the bottom of the page.</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="pp-heading-img">
                    <img src={`${BASE_URL}/img/PrivacyPolicy/Privacy-Policy-banner.png`} alt="Privacy Policy" />
                  </div>
                </div>
              </div>

              <div className="pp-line"></div>

              <div className="row pp-content-row">
                <div className="col-md-12">
                  <div className="pp-content">
                    <h2>Information Collection & Use</h2>
                    <p>Corporality collects data whenever you interact with our Site and Services that could be used to identify you ("Personal Data"). Other data we collect cannot be connected back to you ("Non-Personal Data"). We want users to understand how and why we collect, use, share your data when you visit our Site or engage in our Services or receive communication from us.</p>

                    <p>Corporality Global might collect Personal Data such as your name, contact details (phone number or email address), occupation, company or affiliated academe, website, industry, region/country, and any other information you agree to share. By browsing our Site or sending us information, you agree to Corporality processing and organising your data in alignment with the stipulations stated in this Privacy Policy. Corporality might use your Personal Data to respond to any requests or inquiries or applications or send you communications or maintain the quality of our Services.</p>

                    <p>Corporality also collects Personal Data when you inquire through the website forms, such as filling out a subscription form to our newsletters or scheduling a consultation. If you have applied for a job at Corporality, your information is recorded to evaluate and process your candidacy for employment. We may also use this data to analyse and enhance our recruitment and onboarding processes and to share Corporality events and publications that may be helpful to you. You will find more details in the Job Applicants section.</p>

                    <p>We might also collect Non-Personal Data, such as how you use our Site in accordance with our Cookie Policy. By agreeing to this Policy, Corporality will use your data in the manner stipulated in this Privacy Policy. We advise not sending us any information you do not wish for us to record and use.</p>
                    
                    <p>Corporality may also collect personal data and disclose it to third-party services for marketing and promotional purposes. </p>
      
                    <p>You do not have to provide your personal data with us. However, we may be unable to process your request or provide you with the proper services. When partnered with us, Corporality will keep your Personal Data for as long as needed. If you have applied for a role, Corporality will keep your data for up to five years.</p>
                    
                    <p>Corporality is not responsible for any information you disclose publicly on any chat room, message board, or forums, including those linked to our Site. Such instances of public disclosure can be used to your disadvantage and leave you less secure. In addition, some message boards can reveal the poster's IP address along with their name and message. Your online security is your own responsibility and Corporality is not accountable for any action or collection of your information by any third party on the Site.</p>
                    
                    <h2>Cookie Usage</h2>
                    <p>We may receive information from cookies. These are bits of information that your browser stores and sends back to our server whenever you interact with our Site. We use this information to improve user experience, analyse visitor activity, personalise content and advertisements, and improve the quality of our Services. We store your preferred settings, according to our Cookies Policy. Should you want to disable your cookies, please see the Settings below.</p>

                    <h2>Access to Personal Data</h2>
                    <p>Aside from Corporality, we may share your personal data to third parties that might be located in a different country than your country of residence. Corporality will not disclose or sell your data to any third party for their own use.</p>

                    <p>We may share your personal data with others, such as</p>

                    <ul>
                      <li>carefully-selected third-party service providers, such as marketing service providers (if you have subscribers to our newsletter), IT system providers, recruitment service providers, background check providers, data cleansing providers or event organisers, so they can provide their services.</li>
                      <li>our banking, legal, insurance, and risk management advisors</li>
                      <li>other authorities, such as law enforcement or government bodies when required</li>
                    </ul>

                    <p>Please note that any third-party services that will receive your personal data from us for the purposes stated in this Policy. Your information will not be sold.</p>
                    <p>Any third party services connected with Corporality may be located in other countries, including ones that may not offer the same security to your personal data as the country in which you reside. Corporality assures users that their data is protected with appropriate legal mechanisms. If you reside in the European Union, such mechanisms include contracts approved and recommended by the European Commission (called "Standard Contractual Clauses").</p>

                    <h2>Links to Other Websites</h2>
                    <p>Our Sites may contain links to third-party websites or apps that are governed by their own terms and conditions. Corporality does not bear any liability for the content or information users give to these websites.</p>

                    <p>The Sites may contain links to third-party websites, including social networking sites and academic sources. Such websites follow their own terms of use and privacy policies that you should review before submitting information to them. Corporality is not responsible for the privacy practices of such websites. Corporality also does not endorse or accept responsibility for the content or the use of such websites. </p>

                    <h2>Security of your Personal Data</h2>
                    <p>Corporality has up-to-date technologies and organisational security measures designed to protect your personal information from loss, misuse, modification, or destruction.</p>

                    <p>Corporality has implemented and improved up-to-date technical and organisational measures that are designed to keep your personal information secure from loss, misuse, modification, or destruction. Such measures include keeping your data anonymous where possible. Only authorised Corporality team members and third parties will gain access to this data and use it to provide quality service. Despite these precautions, we recommend users to still follow individual security measures to secure your own information.</p>

                    <h2>Your Rights</h2>
                    <p>Depending on which country you live in, you have the right to ask for, correct, or erase your information or restrict its processing. You might also have the right to withdraw your consent and request that we delete your data.</p>

                    <p>To exercise your rights, kindly contact us through this email: _________</p>

                    <p>Depending on your country of residence, your country may be entitled to certain rights regarding the personal data Corporality stores about you. For example, you may have the right to request access to your information, obtain a copy of it as well as information about how we use it. You have the right to request that we correct incorrect, inaccurate or out-of-date information about you. You may also have the right to request that we stop processing your information and/or withdraw your consent to such processing and to ask us to delete your information.</p>

                    <p>In the event that Corporality holds personal data about you and you no longer wish for this data to be processed as described in this Policy, or if you wish to access, rectify, cancel or oppose such processing, please submit your request using our data subject request form.</p>

                    <p>If you receive marketing communications from Corporality, you can opt out of receiving future emails from Corporality or unsubscribe from participating in our programs through the "preferences" page, which is accessible in every marketing email you receive from Corporality. You can also submit an opt-out request by using our data subject request form.</p>

                    <p>If you think we are handling your information unlawfully, we encourage you to get in touch with us. You may also have the right to file a complaint with your national supervisory authority.</p>

                    <p>Please note that we will take reasonable steps to check your identity before handling your request.</p>

                    <h2>Job Applicants</h2>
                    <p>If you apply for a job at Corporality, you will be asked to submit information to Corporality such as your name, contact details, information about your education and work history and any other background information that might be relevant for your application or that you choose to share with Corporality. If you do not provide this information to us, we might not be able to process your application.</p>

                    <p>Corporality will use this information to assess your application and candidacy for the position to which you have applied. Without limiting the generality of the foregoing, this may include: (i) evaluating your skills and experience in relation to the qualification required for the job to which you have applied; and (ii) tracking feedback and interactions we have with you throughout the recruiting process. We may also use your information when analysing our internal recruiting processes to determine (i) which recruit sources to focus on; (ii) how to improve integration and training programs for new hires with different educational backgrounds and work experience; and (iii) how to enhance our interview model to improve hiring quality. The information you provide may also be used to communicate with you about Corporality events and to send you publications that we think may be of interest to you.</p>

                    <p>We might share your personal data with third parties such as recruitment service providers, background check providers and IT system providers. These third parties might be located in a different country than your country of residence. In particular, if you apply for a consulting role, your data will be stored in a third party database hosted in the Netherlands.</p>

                    <p>We will keep your application data for up to five years. If you no longer wish for Corporality to process your data or if you wish to exercise your rights, please complete the data subject request form.</p>

                    <h2>Children</h2>
                    <p>Our Sites are not directed at children 16 years of age or younger. Corporality, therefore, will not intentionally collect information about anyone under the age of 16, and requests that no such information be submitted to us.</p>

                    <h2>Contact</h2>
                    <p>If you have any questions about this Privacy Policy or how Bain handles your personal data, please contact us at <a href="tel:+61 2 83794089">+61 2 83794089</a></p>

                    <h2>Definitions</h2>
                    <ul>
                      <li>The data controller is the person or company that, together or jointly with others, determines the purposes (why) and means (how) of the processing of personal data.</li>
                      <li>Personal data is any information that relates to an individual who is identified or identifiable, for instance by reference to a name, an identification number or an online identifier.</li>
                      <li>Standard Contractual Clauses are an agreement that can be entered into by companies for transfers of personal data outside of the European Union. They are a mechanism approved by the European Commission to ensure adequate safeguards for personal data when it is transferred outside of the European Union.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy