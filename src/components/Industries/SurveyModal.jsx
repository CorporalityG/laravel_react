import Modal from 'react-bootstrap/Modal'

export const SurveyModal = (props) => {

    const { show, handleClose } = props;

    return (
        <>
            <Modal show={show === 'survey' ? show : ''} onHide={handleClose} className="industry-banner-survey-modal">
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
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