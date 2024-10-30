import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ThemeModeChange = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{ backgroundColor: isDarkMode ? "black" : "white" }}>
      <h4>ThemeModeChange</h4>
      <h6>
        Objective: Create a button that switches the app between light mode and
        dark mode.
      </h6>

      <div
        style={{
          width: "100%",
          height: "100vh",
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
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle
        </Button>
      </div>
    </div>
  );
};

export default ThemeModeChange;
