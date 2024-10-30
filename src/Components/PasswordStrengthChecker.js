//Objective: Create a form that checks whether the password entered by the user meets a minimum length requirement.
// Display an error message if the password is too short.

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const PasswordStrengthChecker = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const handleCheckPassword = () => {
    if (inputPassword.length < 6) {
      setShowMsg(true);
    } else {
      setShowMsg(false);
    }
  };

  return (
    <div>
      <h1>PasswordStrengthChecker</h1>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Email"
              plaintext
              readOnly
              defaultValue="abhikarn14@example.com"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              value={inputPassword}
              //  onChange={(e) => handleChangeInput(e)}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </Col>
        </Form.Group>
      </Form>

      <div
        style={{
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <Button
          style={{
            marginTop: 20,
            width: 100,
            aligneSelf: "center",
            borderRadius: 12,
          }}
          variant="primary"
          onClick={handleCheckPassword}
        >
          Toggle
        </Button>
      </div>
      {showMsg ? (
        <Alert key={"warning"} variant={"warning"}>
          The Password is too Short,
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PasswordStrengthChecker;
