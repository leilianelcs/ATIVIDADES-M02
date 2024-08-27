import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal.css";

const ComponenteModal = () => {
  const [showFirstModal, setShowFirstModal] = useState(true);

  const handleCloseFirstModal = () => setShowFirstModal(false);

  const handleRedirect = () => {
    window.location.href = "https://www.ambev.com.br/consumo-responsavel-aviso";
  };

  return (
    <>
      <Modal
        show={showFirstModal}
        onHide={handleCloseFirstModal}
        dialogClassName="custom-modal-dialog"
        contentClassName="custom-modal-content"
        backdropClassName="custom-backdrop"
      >
        <Modal.Header className="custom-modal-header">
          <Modal.Title>
            <img
              src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"
              alt="Logo"
              className="custom-logo"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          Você tem 18 anos ou mais?
        </Modal.Body>
        <Modal.Footer className="custom-modal-footer">
          <Button
            variant="secondary"
            onClick={handleRedirect}
            className="custom-btn-secondary"
          >
            Não
          </Button>
          <Button
            variant="primary"
            onClick={handleCloseFirstModal}
            className="custom-btn-primary primary"
          >
            Sim
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ComponenteModal;
