import React, { useState } from 'react'
import { BASE_URL } from '../../config'
import { GetInvolved } from '../ServiceInsights/GetInvolved'
import './Pricing.css'
import { useForm } from "react-hook-form"
import { PriceGradeItem } from './PriceGradeItem'

function Pricing() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [frmStep, setFrmStep] = useState(1)
    const [isServiceActive, setIsServiceActive] = useState(0);
    const [isProjectDurationActive, setIsProjectDurationActive] = useState(0);

    const onSubmit = data => {
        /* console.log(data) */
        if (data.privacy_policy_agree) {
            setFrmStep(2);
            console.log(data)
        }
    }

    return (
        <div className='pricing-page'>

            <div className='pricing-banner-section'>
                <img src={`${BASE_URL}/img/Pricing/banner-bg.png`} alt={`Corporality Pricing`} className="pricing-banner-img" />

                <div className='container-lg'>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='pricing-banner-title'>
                                <h1>Corporality Pricing</h1>
                            </div>
                        </div>

                        <div className={`col-lg-10 offset-lg-1 pricing-banner-content-col ${isServiceActive === 0 ? "pbcc-mb" : ""}`}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={`service-form-step-1 service-form-step ${frmStep === 1 ? "show" : "hide"}`}>
                                    <p>We would be happy to send you our current pricing plans as a PDF document via e-mail.</p>

                                    <div className='container-fluid'>
                                        <div className='row pricing-banner-services-row'>
                                            <div className='col-lg-5'>
                                                <div className='pricing-banner-service-cont'>
                                                    <div className='service-title'>Services</div>
                                                    <img src={`${BASE_URL}/img/Pricing/services-img.png`} alt={`Services`} className="service-img" />
                                                </div>
                                            </div>

                                            <div className='col-lg-7'>
                                                <div className='pricing-banner-service-form'>

                                                    <div className="form-group">
                                                        <input {...register("first_name", { required: true })} className={`form-control ${errors.first_name?.type === 'required' && "border-danger text-danger"}`} placeholder="First Name" />
                                                        {/* <span className='text-danger'>{errors.first_name?.type === 'required' && "First name is required"}</span> */}
                                                    </div>

                                                    <div className="form-group">
                                                        <input {...register("last_name", { required: true })} className={`form-control ${errors.last_name?.type === 'required' && "border-danger text-danger"}`} placeholder="Last Name" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input {...register("company_name", { required: true })} className={`form-control ${errors.company_name?.type === 'required' && "border-danger text-danger"}`} placeholder="Company Name" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="email" {...register("work_email", { required: true })} className={`form-control ${errors.work_email?.type === 'required' && "border-danger text-danger"}`} placeholder="Work E-mail" />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="tel" {...register("mobile_number", { required: true })} className={`form-control ${errors.mobile_number?.type === 'required' && "border-danger text-danger"}`} placeholder="Mobile Number" />
                                                    </div>

                                                    <div className="form-group form-check">
                                                        <input type="checkbox" {...register("privacy_policy_agree", { required: true })} className={`form-check-input ${errors.privacy_policy_agree?.type === 'required' && "border-danger text-danger"}`} id="privacy_policy_agree" />
                                                        <label className="form-check-label" htmlFor="privacy_policy_agree">I have read the privacy policy & agree to the processing of my data.</label>
                                                    </div>

                                                    <button type="submit" className="btn-service">Submit</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={`service-form-step-2 service-form-step ${frmStep === 2 ? "show" : "hide1"}`}>
                                    <div className='pricing-services-list'>
                                        <div className='pricing-service-title'>I’M INTERESTED IN...</div>

                                        <div className='pricing-service-list'>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_1" value="Digital Media Marketing" />
                                                <label className={`form-check-label ${isServiceActive === 1 ? 'active' : ''}`} htmlFor="service_name_1" onClick={() => setIsServiceActive(1)}>Digital Media Marketing</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_2" value="Brand Positioning" />
                                                <label className={`form-check-label ${isServiceActive === 2 ? 'active' : ''}`} htmlFor="service_name_2" onClick={() => setIsServiceActive(2)}>Brand Positioning</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_3" value="Go to Marketing Strategy" />
                                                <label className={`form-check-label ${isServiceActive === 3 ? 'active' : ''}`} htmlFor="service_name_3" onClick={() => setIsServiceActive(3)}>Go to Marketing Strategy</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_4" value="Account Based Marketing" />
                                                <label className={`form-check-label ${isServiceActive === 4 ? 'active' : ''}`} htmlFor="service_name_4" onClick={() => setIsServiceActive(4)}>Account Based Marketing</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_5" value="Interactive Blueprint" />
                                                <label className={`form-check-label ${isServiceActive === 5 ? 'active' : ''}`} htmlFor="service_name_5" onClick={() => setIsServiceActive(5)}>Interactive Blueprint</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_6" value="Outsourced CXO" />
                                                <label className={`form-check-label ${isServiceActive === 6 ? 'active' : ''}`} htmlFor="service_name_6" onClick={() => setIsServiceActive(6)}>Outsourced CXO</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_7" value="Outsourced CMO" />
                                                <label className={`form-check-label ${isServiceActive === 7 ? 'active' : ''}`} htmlFor="service_name_7" onClick={() => setIsServiceActive(7)}>Outsourced CMO</label>
                                            </div>

                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" {...register("service_name")} id="service_name_8" value="Outsourced COO" />
                                                <label className={`form-check-label ${isServiceActive === 8 ? 'active' : ''}`} htmlFor="service_name_8" onClick={() => setIsServiceActive(8)}>Outsourced COO</label>
                                            </div>
                                        </div>

                                        <div className='project-budget-main'>
                                            <div className='row project-budget-heading'>
                                                <div className='col-lg-6'>
                                                    <div className='project-budget-title'>PROJECT BUDGET:</div>
                                                </div>

                                                <div className='col-lg-6 project_duration_col'>
                                                    <div className='project_duration'>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_monthly" value="Monthly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Monthly' ? 'active' : ''}`} htmlFor="project_duration_monthly" onClick={() => setIsProjectDurationActive('Monthly')}>Monthly</label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_quaterly" value="Quaterly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Quaterly' ? 'active' : ''}`} htmlFor="project_duration_quaterly" onClick={() => setIsProjectDurationActive('Quaterly')}>Quaterly</label>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" {...register("project_duration")} id="project_duration_yearly" value="Yearly" />
                                                            <label className={`form-check-label ${isProjectDurationActive === 'Yearly' ? 'active' : ''}`} htmlFor="project_duration_yearly" onClick={() => setIsProjectDurationActive('Yearly')}>Yearly</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='project_currency'>
                                                <select {...register("project_currency")} >
                                                    <option value={`AUD`}>AUD</option>
                                                    <option value={`USD`}>USD</option>
                                                </select>
                                            </div>

                                            <div className='row project_price_main'>
                                                <PriceGradeItem
                                                    total={`$1,02,000`}
                                                    subtotal={`$8,500`}
                                                    duration={`month`}
                                                    gradeType={`Grade 1`}
                                                />

                                                <PriceGradeItem
                                                    total={`$1,20,000`}
                                                    subtotal={`$10,000`}
                                                    duration={`month`}
                                                    gradeType={`Grade 2`}
                                                />

                                                <PriceGradeItem
                                                    total={`$1,50,000`}
                                                    subtotal={`$12,500`}
                                                    duration={`month`}
                                                    gradeType={`Grade 3`}
                                                />

                                                <PriceGradeItem
                                                    total={`$1,80,000`}
                                                    subtotal={`$15,000`}
                                                    duration={`month`}
                                                    gradeType={`Grade 4`}
                                                />
                                            </div>
                                        </div>

                                        {/* <button type="submit" className="btn-service">Submit</button> */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <GetInvolved />
        </div>
    )
}

export default Pricing