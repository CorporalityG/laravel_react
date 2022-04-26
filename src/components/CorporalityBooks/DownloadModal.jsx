import React from 'react'
import Modal from 'react-bootstrap/Modal'

function DownloadModal(props) {

    const { show, handleClose } = props;

    return (
        <>
            <Modal size="md" show={show === 'download' ? show : ''} onHide={handleClose} className="c-book-download-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <div className="c-book-download-modal-content">
                        <div className="c-book-download-heading">Download Now</div>
                        <div className="c-book-download-form">
                            <div className="form-group">
                                <input type="text" id="firstname" name="firstname" placeholder="First Name" className="form-control" />
                            </div>

                            <div className="form-group">
                                <input type="text" id="lastname" name="lastname" placeholder="Last Name" className="form-control" />
                            </div>

                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="Email" className="form-control" />
                            </div>

                            <div className="form-group">
                                <input type="tel" id="phone" name="phone" placeholder="Phoone Number" className="form-control" />
                            </div>

                            <div className="form-group">
                                <div className="form-check">
                                    <input type="checkbox" id="subscribe" name="subscribe" className="form-check-input" /><label title="" htmlFor="subscribe" className="form-check-label">Subscribe to Corporality blog</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <p>We're committed to your privacy. HubSpot uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <span>Privacy Policy</span>.</p>
                            </div>

                            <div className="form-group">
                                <button type="submit" id="btnDownload" name="btnDownload" className="download-btn">Download</button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default DownloadModal