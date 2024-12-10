import { useContext } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import "../Lesson.css";
import { MathJax } from "better-react-mathjax";
import NextButton from "../../Components/NextButton/NextButton";

function QuadraticLessonTwo() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/quadratic-lesson-2"}></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Harder Quadratics</h1>
        <div className="content">
          <MathJax>
            {
              "Now let's go through an example that is slightly different to the previous exercises."
            }
          </MathJax>
          <h2>Example 2</h2>
          <MathJax>{"Factorise \\(2x^2 -5x + 3\\)"}</MathJax>
          <p></p>
          <MathJax>
            {
              "Can you spot something different about this expression? If you're thinking that it's the number \\(2\\) infront of the \\(x^2\\), well done!"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "In this case, the format of our answer will be: \\[(2x +a)(x + b)\\] Expanding these brackets once again we get: \\[2x^2 + (2b + a)x + ab\\] And comparing with our question, \\[2x^2 -5x + 3\\] Comparing mathcing terms, we see that \\[(2b + a) = -5\\] \\[ab = 3\\] You might be able to spot that if \\(a = -3\\) and \\(b = -1\\) then both equations are satisfied. But we can also modify our method of listing factors to find the correct pair. The difference is that this time we're not interested in the sum of the factors \\(a\\) and \\(b\\) but rather \\(2b + a\\)."
            }
          </MathJax>
          <p></p>
          <table>
            <thead>
              <tr>
                <td>
                  <MathJax>{"Factor 1 \\((a)\\)"}</MathJax>
                </td>
                <td>
                  <MathJax>{"Factor 2 \\((b)\\)"}</MathJax>
                </td>
                <td>
                  <MathJax>{"\\(2b + a\\)"}</MathJax>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>3</td>
                <td>7</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1</td>
                <td>5</td>
              </tr>
              <tr>
                <td>-1</td>
                <td>-3</td>
                <td>-7</td>
              </tr>
              <tr style={{ color: "#66fcf1" }}>
                <td>-3</td>
                <td>-1</td>
                <td>-5</td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <MathJax>
            {
              "Note that each pair is repeated twice because we get different sums for \\(2b + a\\) when we swap the values for \\(a\\) and \\(b\\)"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "Therefore the factorisation of \\(2x^2 -5x + 3\\) is \\((2x - 3)(x - 1)\\)"
            }
          </MathJax>
        </div>
        <NextButton label={"Next"} path={"/roots-lesson"}></NextButton>
      </div>
    </div>
  );
}

export default QuadraticLessonTwo;
