import { useContext, useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import question17 from "../../Assets/june2019Q17.png";
import FlipCard from "../../Components/FlipCard/FlipCard";
import { MathJax } from "better-react-mathjax";
import question16 from "../../Assets/edexcelNov2021Paper3.png";
import NextButton from "../../Components/NextButton/NextButton";
import { styled } from "@mui/material";

function QuadraticChallenges() {
  const { showSideBar } = useContext(ShowSideBarContext);

  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/quadratic-challenges"} />
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Challenges</h1>
        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>June 2019 Paper 1 Edexcel (Higher Tier)</p>
          <img
            src={question17}
            style={{ width: "90%", maxWidth: "1200px" }}
          ></img>
          <div
            className="hints"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FlipCard number={1}>
              <MathJax style={{ padding: "20px" }}>
                {
                  "If \\(a : b = c : d\\) then \\(\\frac{a}{b} = \\frac{c}{d}\\)"
                }
              </MathJax>
            </FlipCard>
            <FlipCard number={2}>
              <MathJax style={{ padding: "20px" }}>
                {
                  "If \\(x ^ 2 : 3x + 5 = 1 : 2\\) then \\(\\frac{x ^ 2}{3x + 5} = \\frac{1}{2}\\) and therefore \\(2x^2 = 3x + 5\\) "
                }
              </MathJax>
            </FlipCard>
          </div>
          <p>November 2021 Paper 3 Edexcel (Higher Tier)</p>
          <img
            src={question16}
            style={{ width: "90%", maxWidth: "1200px" }}
            alt="the curve C has equation y = x^2 + 3x - 3. The line L has equation y - 5x + 4 = 0. Show algebraically that C and L have exactly one point in common"
          />
          <div
            className="hints"
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <FlipCard number={1}>
              <MathJax style={{ padding: "10px" }}>
                {
                  "Try finding the intersection points of \\(L\\) and \\(C\\) and show that the resulting equation has a discriminant of zero."
                }
              </MathJax>
            </FlipCard>
            <FlipCard number={2}>
              <MathJax style={{ padding: "10px" }}>
                {"Rearrange \\(L\\) so that it of the form \\(y = mx + c\\)"}
              </MathJax>
              <MathJax style={{ padding: "10px", paddingTop: "0px" }}>
                {
                  "Now eliminate the variable \\(y\\) by setting \\(x^2 +3x -3 = mx + c\\) and find the discriminant of this quadratic!"
                }
              </MathJax>
            </FlipCard>
          </div>
          <NextButton
            style={{ marginTop: "40px" }}
            label={"Next"}
            path={"/"}
          ></NextButton>
        </div>
      </div>
    </div>
  );
}

export default QuadraticChallenges;
