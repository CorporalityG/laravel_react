import Modal from 'react-bootstrap/Modal'

export const ResearchPaperModal = (props) => {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show === 1 ? show : ''} onHide={handleClose} className="industry-banner-paper-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    {/* {props.src && <iframe src={`${props.src}`}></iframe>} */}
                    {
                        props.src ?
                            <span dangerouslySetInnerHTML={{ __html: props.src }}></span>
                            : null
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}