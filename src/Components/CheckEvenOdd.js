import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const CheckEvenOdd = () => {
  const [input, setInput] = useState("");
  const [isEvenOdd, setIsEvenOdd] = useState(false);

  const EVEN = "Entered Number is Even";
  const ODD = "Entered Number is Odd";

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    setInput(e.target.value);
    if (input % 2 === 0) {
      setIsEvenOdd(true);
    } else {
      setIsEvenOdd(false);
    }
  };

  return (
    <div>
      <h4>CheckEvenOdd</h4>
      <h5>
        Create a component that allows users to input a number.Display whether
        the number is even or odd.
      </h5>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Number
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="number"
              value={input}
              onChange={(e) => handleSubmit(e)}
            />
          </Col>
        </Form.Group>
      </Form>

      {/* <div
        style={{
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <Button
          variant={"primary"}
          style={{
            marginTop: 20,
            width: 100,
            aligneSelf: "center",
            borderRadius: 12,
          }}
          onClick={handleSubmit}
        >
          Toggle
        </Button>
      </div> */}

      {input.length > 0 && <Alert key={"info"}>{isEvenOdd ? EVEN : ODD}</Alert>}
      {/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal> */}
    </div>
  );
};

export default CheckEvenOdd;
