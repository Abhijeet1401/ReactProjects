import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const AgeVerification = () => {
  const [inputAge, setInputAge] = useState("");
  const [showContent, setShowContent] = useState(false);

  const handleSubmit = (e) => {
    setInputAge(e.target.value);
    if (inputAge >= 18) {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  };

  return (
    <div>
      <h4>AgeVerification</h4>
      <h5>
        Objective: Create a component that asks the user for their age and
        displays content only if they are 18 or older.
      </h5>

      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Age
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="number"
              placeholder="number"
              value={inputAge}
              onChange={(e) => setInputAge(e.target.value)}
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
          onClick={handleSubmit}
        >
          Toggle
        </Button>
      </div>

      {showContent ? (
        <div>
          Eligibility to Vote: To be eligible to vote in India, a person must be
          a citizen of India and have reached the age of 18 or older as of
          January 1st of the year in which the electoral roll is prepared. The
          person should also not be disqualified from voting due to certain
          legal reasons, such as being of unsound mind or being disqualified
          under specific laws.
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AgeVerification;
