import { useContext, useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import { MathJax } from "better-react-mathjax";
import Correct from "../../Components/Correct/Correct";
import Incorrect from "../../Components/Incorrect/Incorrect";
import HintQF from "../../Components/HintQF/JintQF";

function QuadraticFormulaExercises() {
  const { showSideBar } = useContext(ShowSideBarContext);
  const [xsq, setXsq] = useState(Math.ceil(Math.random() * 9));
  const [x, setX] = useState(Math.floor(Math.random() * 30));
  const [constant, setConstant] = useState(Math.ceil(Math.random() * 15));
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setX((curr) => curr * sign1);
    setConstant((curr) => curr * sign2);
  }, []);

  function handleCheck() {
    const disc = x ** 2 - 4 * xsq * constant;
    if (disc >= 0) {
      const root1 = (-x + Math.sqrt(disc)) / (2 * xsq);
      const root2 = (-x - Math.sqrt(disc)) / (2 * xsq);
      const correct =
        (Number(root1.toFixed(2)) === Number(input1) &&
          Number(root2.toFixed(2)) === Number(input2)) ||
        (Number(root2.toFixed(2)) === Number(input1) &&
          Number(root1.toFixed(2)) === Number(input2));
      if (correct) {
        setFeedback("correct");
      } else {
        setFeedback("incorrect");
      }
    } else {
      setFeedback("incorrect");
    }
  }

  function handleReset() {
    setInput1("");
    setInput2("");
    setFeedback(null);
    setXsq(Math.ceil(Math.random() * 9));
    setX(Math.floor(Math.random() * 30));
    setConstant(Math.ceil(Math.random() * 15));
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setX((curr) => curr * sign1);
    setConstant((curr) => curr * sign2);
  }

  function handleNoSolutions() {
    const disc = x ** 2 - 4 * xsq * constant;
    if (disc < 0) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  }

  const xSqCoeFormatted = xsq === 1 ? "" : xsq;
  let xterm = "";
  if (x === 1) {
    xterm = "+x";
  } else if (x === -1) {
    xterm = "-x";
  } else if (x > 0) {
    xterm = `+${x}x`;
  } else if (x < 0) {
    xterm = `${x}x`;
  }

  let constantFormatted = "";
  if (constant > 0) {
    constantFormatted = `+ ${constant}`;
  } else if (constant < 0) {
    constantFormatted = `${constant}`;
  }

  const answer = (
    <div
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MathJax>{`\\(x = ${(
        (-x + Math.sqrt(x ** 2 - 4 * xsq * constant)) /
        (2 * xsq)
      ).toFixed(2)}\\) and \\(x = ${(
        (-x - Math.sqrt(x ** 2 - 4 * xsq * constant)) /
        (2 * xsq)
      ).toFixed(2)}\\)`}</MathJax>
      <button
        className="button"
        onClick={handleReset}
        style={{ marginTop: "10px" }}
      >
        New Question
      </button>
    </div>
  );

  return (
    <div className="lesson-container">
      <SideBar
        topic={"quadratics"}
        currPath={"/quadratic-formula-exercises"}
      ></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Quadratic Formula Exercises</h1>
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MathJax>{`Find the roots of the following equation \\(${xSqCoeFormatted}x^2${xterm}${constantFormatted} = 0\\)`}</MathJax>
          <p></p>
          <MathJax>
            {"Please round your answers to two decimal places."}
          </MathJax>
          <p></p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MathJax style={{ display: "inline-block" }}>{"\\(x =\\)"}</MathJax>
            <input
              type="text"
              style={{
                display: "inline-block",
                margin: "10px",
                width: "70px",
              }}
              onChange={({ target: { value } }) => {
                setInput1(value);
              }}
              value={input1}
            ></input>
            <MathJax style={{ display: "inline-block" }}>
              {"and \\(x =\\)"}
            </MathJax>
            <input
              type="text"
              style={{
                display: "inline-block",
                marginLeft: "10px",
                width: "70px",
              }}
              onChange={({ target: { value } }) => {
                setInput2(value);
              }}
              value={input2}
            ></input>
          </div>
          {feedback === null ? (
            <>
              <button className="button" onClick={handleCheck}>
                Check Answer
              </button>
              <button className="button" onClick={handleNoSolutions}>
                No solutions
              </button>
            </>
          ) : null}
          {feedback === "correct" ? (
            <Correct handleReset={handleReset} path={"/quadratic-challenges"} />
          ) : null}
          {feedback === "incorrect" ? (
            <Incorrect
              handleCheck={handleCheck}
              setShowHint={setShowHint}
              setFeedback={setFeedback}
              quadraticFormula={true}
              handleNoSolutions={handleNoSolutions}
            />
          ) : null}
          {feedback === "answer" ? answer : null}
          <HintQF x={x} xsq={xsq} constant={constant} showHint={showHint} />
        </div>
      </div>
    </div>
  );
}

export default QuadraticFormulaExercises;
