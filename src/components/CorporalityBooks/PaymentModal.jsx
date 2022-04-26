import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { BASE_URL } from '../../config';

function PaymentModal(props) {

    const { show, handleClose } = props;

    return (
        <>
            <Modal size="xl" show={show === 'payment' ? show : ''} onHide={handleClose} className="c-book-payment-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row c-book-payment-modal-row">
                            <div className="col-lg-6">
                                <div className="c-book-payment-content">
                                    <div className="c-book-payment-content-heading">Related to our this</div>
                                    <p>Loerm ipsum adopt the virtual work culture and go global? Making business human-to-human has never been easier. Train, educate, share, and enhance your customer experience by connecting with us online. With Corporality, you can learn  audiences with Video.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="c-book-payment-process">
                                    <div className="c-book-payment-process-heading">Payment Process</div>
                                    <div className="c-book-payment-process-form">
                                        <div className="form-group">
                                            <input type="text" id="fullname" name="fullname" placeholder="Name" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <input type="email" id="emailid" name="emailid" placeholder="Email Id" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" id="phone" name="phone" placeholder="Phone" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <select id="country" name="country" className="form-select">
                                                <option value=''>Select Country</option>
                                                <option value='Australia'>Australia</option>
                                                <option value='India'>India</option>
                                                <option value='USA'>USA</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check">
                                                <input type="checkbox" id="agree_terms_condition" name="agree_terms_condition" className="form-check-input" /><label title="" htmlFor="agree_terms_condition" className="form-check-label">I agree the terms and conditions</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" id="btnPay" name="btnPay" className="pay-btn">Pay Here</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <div className="c-book-payment-modal-bg">
                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-vector-1.png'} alt="Vector 1" className="pm-vec-1" />
                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-vector-2.png'} alt="Vector 2" className="pm-vec-2" />

                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-rec-1.png'} alt="Rec 1" className="pm-rec-1" />
                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-rec-2.png'} alt="Rec 2" className="pm-rec-2" />
                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-rec-2.png'} alt="Rec 3" className="pm-rec-3" />
                    <img src={BASE_URL + '/img/CorporalityBook/payment-modal-rec-2.png'} alt="Rec 4"  className="pm-rec-4" />
                </div>
            </Modal>
        </>
    )
}

export default PaymentModal