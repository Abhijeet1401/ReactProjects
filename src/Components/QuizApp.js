import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = [
  {
    id: 1,
    question: "The sun is the center of our solar system.",
    answer: true,
  },
  {
    id: 2,
    question: "Humans can breathe underwater without any special equipment.",
    answer: false,
  },
  {
    id: 3,
    question: "The capital of France is Berlin.",
    answer: false,
  },
  {
    id: 4,
    question: "Water boils at 100°C at sea level.",
    answer: true,
  },
  {
    id: 5,
    question: "Bats are mammals.",
    answer: true,
  },
  {
    id: 6,
    question: "Sharks are fish, not mammals.",
    answer: true,
  },
  {
    id: 7,
    question: "Sound travels faster in air than in water.",
    answer: false,
  },
  {
    id: 8,
    question: "Light travels faster than sound.",
    answer: true,
  },
  {
    id: 9,
    question: "A triangle has four sides.",
    answer: false,
  },
  {
    id: 10,
    question: "There are 365 days in a leap year.",
    answer: false,
  },
];

const QuizApp = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    console.log("====", e.target.value);
    setAnswer(answer);
  };
  return (
    <div>
      <h1>QuizApp</h1>
      <h6>
        Objective: Create a simple quiz app with true/false questions. Display
        whether the user’s answers are correct or not after submission.
      </h6>

      <div
        style={{
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        {data.map((item, index) => {
          return (
            <div>
              Question: {item.id}
              {" " + item.question}
              <Form.Group
                as={Row}
                className="mb-6"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  Answer
                </Form.Label>
                <Col sm="5">
                  <Form.Control
                    type={"text"}
                    placeholder="Answer"
                    value={answer.id}
                    onChange={(e) => handleSubmit(e)}
                  />
                </Col>
              </Form.Group>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizApp;
