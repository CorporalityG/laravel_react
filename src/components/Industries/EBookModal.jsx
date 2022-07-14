import Modal from 'react-bootstrap/Modal'

export const EBookModal = (props) => {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show === 'ebook' ? show : ''} onHide={handleClose} className="industry-banner-ebook-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {props.src && <iframe src={`${props.src}`}></iframe>}
                </Modal.Body>
            </Modal>
        </>
    )
}