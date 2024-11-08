import { useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { MathJax } from "better-react-mathjax";
import "./QuadraticExerciseOne.css";
import FactorTable from "../../Components/FactorTable/FactorTable";
import NextButton from "../../Components/NextButton/NextButton";

function QuadraticExerciseOne() {
  const [root1, setRoot1] = useState(Math.floor(Math.random() * 9));
  const [root2, setRoot2] = useState(Math.floor(Math.random() * 9));
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setRoot1((curr) => curr * sign1);
    setRoot2((curr) => curr * sign2);
  }, []);

  function handleReset() {
    setFeedback(null);
    setInput1("");
    setInput2("");
    setRoot1(Math.floor(Math.random() * 10));
    setRoot2(Math.floor(Math.random() * 10));
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setRoot1((curr) => curr * sign1);
    setRoot2((curr) => curr * sign2);
  }

  function handleCheck() {
    const correct =
      (root1 === Number(input1) && root2 === Number(input2)) ||
      (root1 === Number(input2) && root2 === Number(input1));
    if (correct) {
      setFeedback("correct");
      setShowHint(false);
    } else {
      setFeedback("incorrect");
    }
  }

  const correct = (
    <>
      <p>Correct! Well Done!</p>
      <button className="button" onClick={handleReset}>
        New question
      </button>
      <NextButton label={"Next"} path={"/quadratic-lesson-2"}></NextButton>
    </>
  );

  const incorrect = (
    <>
      <p>Not quite! Try again or get a hint!</p>
      <button className="button" onClick={handleCheck}>
        Check Answer
      </button>
      <button
        className="button"
        onClick={() => {
          setShowHint(true);
        }}
      >
        Get hint
      </button>
    </>
  );

  const sign1 = root1 + root2 > 0 ? "+" : "";
  const sign2 = root1 * root2 > 0 ? "+" : "";
  let xCoe = "";
  if (Math.abs(root1 + root2) == 1) {
    xCoe = root1 + root2 > 0 ? "x" : "-x";
  } else if (root1 + root2 != 0) {
    xCoe = `${root1 + root2}x`;
  }
  const constant = root1 * root2 === 0 ? "" : root1 * root2;

  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/quadratic-exercise-1"} />
      <div className="lesson">
        <h1 className="lesson-name">Factorising Practise</h1>
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MathJax>{`Factorise the following: \\(x^2 ${sign1} ${xCoe} ${sign2} ${constant}\\)`}</MathJax>
          <p></p>
          <MathJax>
            {"\\((x + \\)"}{" "}
            <input
              value={input1}
              type="text"
              style={{ width: "25px" }}
              onChange={({ target: { value } }) => {
                setInput1(value);
              }}
            />
            {"\\()\\)"}
            {"\\((x + \\)"}{" "}
            <input
              value={input2}
              type="text"
              style={{ width: "25px" }}
              onChange={({ target: { value } }) => {
                setInput2(value);
              }}
            />
            {"\\()\\)"}
          </MathJax>
          <p></p>
          {feedback === null ? (
            <button className="button" onClick={handleCheck}>
              Check Answer
            </button>
          ) : null}
          {feedback === "correct" ? correct : null}
          {feedback === "incorrect" ? incorrect : null}
          <FactorTable root1={root1} root2={root2} showHint={showHint} />
        </div>
      </div>
    </div>
  );
}

export default QuadraticExerciseOne;
