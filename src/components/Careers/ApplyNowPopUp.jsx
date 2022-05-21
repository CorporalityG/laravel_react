import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { BASE_URL } from '../../config';

export const ApplyNowPopUp = (props) => {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show === 'apply' ? show : ''} onHide={handleClose} className="cc-job-apply-modal">
                <Modal.Header closeButton>
                    <div className="modal-title">Apply Now</div>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid px-0">
                        <div className="row">
                            <div className="col-lg-12 form-group">
                                <input type="text" id="full_name" name="full_name" placeholder="Name *" className="form-control" />
                            </div>

                            <div className="col-lg-12 form-group">
                                <input type="email" id="email" name="email" placeholder="Email *" className="form-control" />
                            </div>

                            <div className="col-lg-12 form-group">
                                <input type="text" id="phone_no" name="phone_no" placeholder="Phone No *" className="form-control" />
                            </div>

                            <div className="col-lg-12 form-group">
                                <input type="text" id="experience" name="experience" placeholder="Experience *" className="form-control" />
                            </div>

                            <div className="col-lg-12 form-group">
                                <label>File</label>
                                <div className="upload_resume">
                                    <input type="file" name="upload_resume" id="upload_resume" className="upload_resume_input" />
                                    <label className="upload_resume_label">
                                    <img src={`${BASE_URL}/img/Careers/upload-icon.png`} alt="Upload Your Resume" className="upload-icon" />Upload Your Resume</label>
                                </div>
                            </div>

                            <div className="col-lg-12 form-group send-btn-main">
                                <button type="submit" id="btnSend" name="btnSend" className="send-btn">Send Us</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}