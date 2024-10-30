import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
//import Alert from "react-bootstrap/Alert";

const LoginStatus = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <h6>
        Objective: Create a component that displays a welcome message if the
        user is logged in and a prompt to log in if not.
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
              // value={email}
              // onChange={(e) => handleValidEmail(e)}
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
              // value={email}
              //onChange={(e) => handleValidEmail(e)}
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
          //  onClick={}
        >
          Toggle
        </Button>
      </div>
    </div>
  );
};

export default LoginStatus;
