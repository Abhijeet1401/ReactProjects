import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const PalindromeChecker = () => {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalindrome] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [vowelCount, setVowelCount] = useState(0);

  const handleOnChange = (e) => {
    setIsPalindrome("");
    // setVowelCount("");
    setInput(e.target.value);
  };
  const handleCountWord = () => {
    let count = 0;
    let vowelcount = 0;
    let countChar = 0;
    let newInput = input.split(" ");
    let str = input.trim().split("");

    for (let i = 0; i < newInput.length; i++) {
      if (str[i] !== " ") {
        count += 1;
      }

      setWordCount(count);
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        countChar += 1;
      }
      setCharCount(countChar);
    }
    console.log("Number of char", countChar);

    // const vowelCheck = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < input.length; i++) {
      let letter = input[i];
      if (letter.match(/([a,e,i,o,u])/)) {
        vowelcount += 1;
      }
    }
    setVowelCount(vowelcount);
    // console.log(vowelcount);
  };
  const handleCheck = () => {
    let reversed = "";
    //  let count = 0;
    //  let newInput = input.split("");
    for (let i = input.length - 1; i >= 0; i--) {
      reversed += input[i];
      reversed.toLowerCase();
      //console.log("reversed", reversed);
    }
    if (input === reversed) {
      setIsPalindrome("is palindrome");
    } else if (input !== reversed) {
      setIsPalindrome("is not palindrome");
    } else {
      setIsPalindrome("");
    }

    // setInput("");
  };
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.header}>Palindrome Checker and Vowel Counter </h1>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <section style={styles.countdisplay}>
          <div
            style={{
              width: "700px",
              marginTop: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  value={input}
                  onChange={(e) => handleOnChange(e)}
                  placeholder="Input To check"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
            </Form>
            <div>
              <h4>{isPalindrome}</h4>
            </div>

            <div
              style={{
                // backgroundColor: "red",
                // gap: 20,
                marginTop: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <div>
                <h1 style={{ textAlign: "center" }}>{wordCount}</h1>
                <h5 style={{ textAlign: "center" }}>Word</h5>
              </div>

              <div>
                <h1 style={{ textAlign: "center" }}>{vowelCount}</h1>
                <h5 style={{ textAlign: "center" }}>vowelCount</h5>
              </div>

              <div>
                <h1 style={{ textAlign: "center" }}>{charCount}</h1>
                <h5 style={{ textAlign: "center" }}>Character</h5>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            width: "50%",
            marginTop: "30px",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Button
            onClick={() => handleCheck()}
            style={{ width: "50%" }}
            variant="primary"
          >
            Check
          </Button>
          <Button
            onClick={() => handleCountWord()}
            style={{ width: "50%" }}
            variant="primary"
          >
            Word Count
          </Button>
        </div>
      </div>
    </div>
  );
};
const styles = {
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    color: "#37474f",
    textAlign: "center",
  },
  countdisplay: {
    width: "60%",
    height: "500px",
    // backgroundColor: "gray",
    // backgroundColor: "linear-gradient(to bottom, #ADD8E6, #FFFFFF)",
    background: "linear-gradient(135deg, #e0f7fa, #f1f8e9)",
    borderRadius: "20px",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    //flexDirection: "column",
  },
};

export default PalindromeChecker;
