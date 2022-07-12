import Modal from 'react-bootstrap/Modal'

export const ResearchPaperModal = (props) => {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show === 1 ? show : ''} onHide={handleClose} className="industry-banner-paper-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <iframe src={`${props.src}`}></iframe>
                </Modal.Body>
            </Modal>
        </>
    )
}