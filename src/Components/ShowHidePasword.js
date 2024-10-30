//Objective: Create a form that checks whether the password entered by the user meets a minimum length requirement.
// Display an error message if the password is too short.

import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ShowHidePasword = () => {
  const [inputPasword, setInputPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  // const handleSubmit = () => {

  // };

  return (
    <div>
      <h1>Show/Hide Password</h1>
      <h6>
        Objective: Create a password input field with a button to toggle between
        showing and hiding the password..
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
              onChange={(e) => setEmail(e)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={inputPasword}
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
          variant={"primary"}
          style={{
            marginTop: 20,
            width: 100,
            aligneSelf: "center",
            borderRadius: 12,
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          Toggle
        </Button>
      </div>
    </div>
  );
};

export default ShowHidePasword;
