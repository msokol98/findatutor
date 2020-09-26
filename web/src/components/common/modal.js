import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

const MyModal = ({ show, header, body, setShow }) => {
    
    return (
        <Modal style={{zIndex: '100000'}} show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{header}</Modal.Title>
          </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
}
  
export default MyModal;