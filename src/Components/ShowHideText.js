//Objective:
//Create a button that toggles between showing and hiding a piece of text when clicked.

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const ShowHideText = () => {
  const [isShowing, isSetShowing] = useState(false);

  return (
    <div>
      {isShowing ? <h2>i am Abhijeet Kumar</h2> : <></>}

      <Button
        style={{ marginTop: 20, width: 100, borderRadius: 12 }}
        variant="primary"
        onClick={() => isSetShowing(!isShowing)}
      >
        Toggle
      </Button>
    </div>
  );
};

export default ShowHideText;
