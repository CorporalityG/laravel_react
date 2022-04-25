import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { BASE_URL } from '../../../config';

function WriteToUsModal(props) {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show == 'write' ? show : ''} onHide={handleClose} className="ibp-write-us-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="container-fluid  pl-sm-0">
                        <div className="row ibp-wu-modal-row">
                            <div className="col-sm-5 pr-0">
                                <div className="ibp-wu-banner">
                                    <img src={`${BASE_URL}/img/IntractiveBluePrint/write-to-us-banner.png`} alt="working-rec-1" />
                                </div>
                            </div>

                            <div className="col-sm-7 pl-0">
                                <div className="ibp-wu-content">
                                    <div className="ibp-wu-heading">Write to us</div>
                                    <div className="ibp-wu-form">
                                        <div className="form-group">
                                            <input type="text" id="first_name" name="first_name" placeholder="First Name" className="form-control" />
                                            <label htmlFor="first_name" className="label">First Name</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" id="last_name" name="last_name" placeholder="Last Name" className="form-control" />
                                            <label htmlFor="last_name" className="label">Last Name</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" id="emailid" name="emailid" placeholder="Email" className="form-control" />
                                            <label htmlFor="emailid" className="label">Email</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" id="mobile" name="mobile" placeholder="Mobile" className="form-control" />
                                            <label htmlFor="mobile" className="label">Mobile</label>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" id="btnSubmit" name="btnSubmit" className="submit-btn">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WriteToUsModal