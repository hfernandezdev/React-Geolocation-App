import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PinDetailsModal = ({ show, handleClose, pin }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Latitud: {pin.lat}</p>
        <p>Longitud: {pin.lng}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PinDetailsModal;
