import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export const BootstrapComponentDemo = () => {
  const [isError, setIsError] = useState(false);

  const INFO_ALERT = "I am info alert";
  const ERROR_ALERT = "I am error alert";

  const showMsg = isError ? ERROR_ALERT : INFO_ALERT;
  const variant = isError ? "danger" : "info";

  return (
    <div>
      <Alert key={variant} variant={variant}>
        {showMsg}
      </Alert>

      <Button variant="primary" onClick={() => setIsError(!isError)}>
        Toggle
      </Button>
    </div>
  );
};
