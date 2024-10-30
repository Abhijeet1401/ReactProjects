//Objective: Create a form that checks whether the password entered by the user meets a minimum length requirement.
// Display an error message if the password is too short.

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const regex = /^[a-zA-Z0-9_.+-]+[\x40][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleValidEmail = (e) => {
    setEmail(e.target.value);
    if (regex.test(email)) {
      console.log("is valid");
      setIsValid(true);
    } else {
      console.log("entered in else con");
      setIsValid(false);
    }
  };
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div>
      <h1>Email Validation</h1>
      <h6>
        Objective: Create a simple form with an email and a submit button. Only
        enable the submit button if the email format is valid (i.e., contains
        “@” and a domain).
      </h6>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue="abhikarn14@example.com"
              value={email}
              onChange={(e) => handleValidEmail(e)}
            />
          </Col>
        </Form.Group>

        {/* <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder="Password"
              value={email}
              onChange={(e) => handleValidEmail(e)}
            />
          </Col>
        </Form.Group> */}
      </Form>

      <div
        style={{
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <Button
          variant={!isValid ? "secondary" : "primary"}
          disabled={!isValid ? true : false}
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
      </div>
    </div>
  );
};

export default FormValidation;
