import { useContext, useEffect, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import { MathJax } from "better-react-mathjax";
import "./QuadraticExerciseTwo.css";
import Correct from "../../Components/Correct/Correct";
import Incorrect from "../../Components/Incorrect/Incorrect";
import HintQE2 from "../../Components/HintQE2/HintQE2";
import { HCF } from "../../Utils/HCF";

function QuadraticExerciseTwo() {
  const { showSideBar } = useContext(ShowSideBarContext);

  const [bracket1, setBracket1] = useState(1);
  const [bracket2, setBracket2] = useState(1);
  const [bracketx1, setBracketx1] = useState(Math.ceil(Math.random()) + 1);
  const [bracketx2, setBracketx2] = useState(Math.ceil(Math.random() * 5));
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const nums1To9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bracket1Options = nums1To9.filter((num) => HCF(num, bracketx1) === 1);
    const bracket2Options = nums1To9.filter((num) => HCF(num, bracketx2) === 1);
    let randIndex = Math.floor(Math.random() * bracket1Options.length);
    setBracket1(bracket1Options[randIndex]);
    randIndex = Math.floor(Math.random() * bracket2Options.length);
    setBracket2(bracket2Options[randIndex]);
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setBracket1((curr) => curr * sign1);
    setBracket2((curr) => curr * sign2);
  }, []);

  let xterm = "";
  if (bracket1 * bracketx2 + bracket2 * bracketx1 === 1) {
    xterm = "+x";
  } else if (bracket1 * bracketx2 + bracket2 * bracketx1 === -1) {
    xterm = "-x";
  } else if (bracket1 * bracketx2 + bracket2 * bracketx1 > 0) {
    xterm = `+${bracket1 * bracketx2 + bracket2 * bracketx1}x`;
  } else if (bracket1 * bracketx2 + bracket2 * bracketx1 < 0) {
    xterm = `${bracket1 * bracketx2 + bracket2 * bracketx1}x`;
  }

  let constant = "";
  if (bracket1 * bracket2 > 0) {
    constant = `+ ${bracket1 * bracket2}`;
  } else if (bracket1 * bracket2 < 0) {
    constant = `${bracket1 * bracket2}`;
  }

  function handleCheck() {
    const answer1 = Number((-bracket1 / bracketx1).toFixed(2));
    const answer2 = Number((-bracket2 / bracketx2).toFixed(2));
    console.log(answer1, answer2);
    const correctAnswer =
      (Number(input1) === answer1 && Number(input2) === answer2) ||
      (Number(input2) === answer1 && Number(input1) === answer2);
    if (correctAnswer) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  }

  function handleReset() {
    setFeedback(null);
    setInput1("");
    setInput2("");
    setBracketx1(Math.ceil(Math.random()) + 1);
    setBracketx2(Math.ceil(Math.random() * 5));
    const nums1To9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const bracket1Options = nums1To9.filter((num) => HCF(num, bracketx1) === 1);
    const bracket2Options = nums1To9.filter((num) => HCF(num, bracketx2) === 1);
    let randIndex = Math.floor(Math.random() * bracket1Options.length);
    setBracket1(bracket1Options[randIndex]);
    randIndex = Math.floor(Math.random() * bracket2Options.length);
    setBracket2(bracket2Options[randIndex]);
    const sign1 = Math.random() < 0.5 ? 1 : -1;
    const sign2 = Math.random() < 0.5 ? 1 : -1;
    setBracket1((curr) => curr * sign1);
    setBracket2((curr) => curr * sign2);
  }

  const answer = (
    <>
      <MathJax
        style={{ marginTop: "25px" }}
      >{`The factorised equation is: \\((${bracketx1}x ${
        bracket1 < 0 ? bracket1 : `+ ${bracket1}`
      })(${bracketx2 === 1 ? "" : bracketx2}x ${
        bracket2 < 0 ? bracket2 : `+ ${bracket2}`
      })\\)`}</MathJax>
      <MathJax
        style={{ marginTop: "25px" }}
      >{`And the roots are: \\(x = ${Number(
        (-bracket1 / bracketx1).toFixed(2)
      )}\\) and \\(x = ${Number(
        (-bracket2 / bracketx2).toFixed(2)
      )}\\)`}</MathJax>
      <button
        className="button"
        style={{ marginTop: "25px" }}
        onClick={handleReset}
      >
        New Question
      </button>
    </>
  );

  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"quadratic-exercise-2"} />
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Harder Quadratic Exercises</h1>
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Find the roots of the following equation:</p>
          <MathJax>{`\\[${
            bracketx1 * bracketx2
          }x^2 ${xterm} ${constant} = 0\\]`}</MathJax>
          <p>Please round your answers to 2 decimal places if necessary</p>
          <div>
            <MathJax style={{ display: "inline-block" }}>{"\\(x =\\)"}</MathJax>
            <input
              type="text"
              style={{
                display: "inline-block",
                margin: "10px",
                width: "50px",
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
                width: "50px",
              }}
              onChange={({ target: { value } }) => {
                setInput2(value);
              }}
              value={input2}
            ></input>
          </div>
          {feedback === null ? (
            <button
              className="button"
              style={{ marginTop: "30px" }}
              onClick={handleCheck}
            >
              Check Answer
            </button>
          ) : null}
          {feedback === "correct" ? (
            <Correct
              handleReset={handleReset}
              path={"/quadratic-formula"}
            ></Correct>
          ) : null}
          {feedback === "incorrect" ? (
            <Incorrect
              handleCheck={handleCheck}
              setShowHint={setShowHint}
              setFeedback={setFeedback}
            />
          ) : null}
          {feedback === "answer" ? answer : null}
          <HintQE2
            bracket1={bracket1}
            bracket2={bracket2}
            bracketx1={bracketx1}
            bracketx2={bracketx2}
            showHint={showHint}
          />
        </div>
      </div>
    </div>
  );
}

export default QuadraticExerciseTwo;
