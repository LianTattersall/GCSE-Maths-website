import { useContext } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import "../Lesson.css";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import { MathJax } from "better-react-mathjax";
import { LineChart } from "@mui/x-charts";
import QuadraticGraph1 from "../../Components/Graphs/QuadraticGraph1";
import QuadraticGraph2 from "../../Components/Graphs/QuadraticGraph2";
import NextButton from "../../Components/NextButton/NextButton";

function RootsLesson() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/roots-lesson"} />
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Roots of an Equation</h1>
        <div className="content">
          <MathJax>
            {
              "Consider again the expression \\(x^2 + 5x + 6\\). When we add an equals sign, for example: \\[x^2 + 5x + 6 = 0\\] it becomes an equation. The right hand side of the equation does not have to be zero, it could also be \\[x^2 + 5x + 6 = 34\\] \\[x^2 + 5x + 6 = 34x + 2\\]"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "So to summarise 'equations' are different from 'expressions' because they have an '=' symbol and something on both sides of the '=' symbol."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "A root is a value that makes an equation true, for example for the equation \\[x^2 + 5x + 6 = 0\\] the number \\(1\\) is NOT a root because the left hand side would equal \\((1)^2 + 5(1) + 6 = 12\\) but the right hand side equals to \\(0\\), so the equality does not hold in this case."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "The number \\(-2\\) IS a root however. When \\(x = -2\\) the left hand equals \\((-2)^2 + 5(-2) + 6 = 0\\), and the right hand side also equals \\(0\\)! Therefore \\(x = -2\\) is a root of the equation \\(x^2 + 5x + 6 = 0\\). So how can we calculate the roots of an equation?"
            }
          </MathJax>
          <h2>How to calculate roots using a graph</h2>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QuadraticGraph1 />
          </div>
          <MathJax>
            {
              "Take a look at the graph above. How could we use it to solve \\[x^2 - 9 = 0\\]To solve an equation graphically, we plot the left hand side, \\(y = x^2 - 9\\), and the right hand side, \\(y = 0\\), of our equation and look for the \\(x\\) values of the intersection points."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "In this example, the two lines intersect at \\(x = 3\\) and \\(x = -3\\) therefore \\(3\\) and \\(-3\\) are the roots of \\(x^2 - 9 = 0\\)"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "This works since, at an intersection point, the \\(x\\) and \\(y\\) values of both lines match up. Therefore, at these intersection points our equation \\(x^2 - 9 = 0\\) will indeed be true!"
            }
          </MathJax>
          <h2>Example 3</h2>
          <MathJax>
            {"Solve the equation \\(x^2 = 2 - x\\) using the graph below."}
          </MathJax>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QuadraticGraph2 />
          </div>
          <MathJax>
            {
              "Notice again how the lines that are plotted match up with the left hand side and right hand side of the equation we want of solve. To find a root or 'solution' for this equation look for the \\(x\\) values where the two lines intersect."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {"The roots are therefore, \\(x = -2\\) and \\(x = 1\\)."}
          </MathJax>
          <h2>How to find roots using factorisation</h2>
          <MathJax>
            {
              "Now, suppose you're in an exam and they ask you for the roots of \\(x^2 = 2 - x\\) but you don't have any graph paper! Luckily, there is an alternative (and more accurate) method for finding roots and we've already learnt the key thing that it uses: factorisation!"
            }
          </MathJax>
          <h2>Example 4</h2>
          <MathJax>{"Solve \\(x^2 = 4x - 3\\)"}</MathJax>
          <p></p>
          <MathJax>
            {
              "Firstly, let's factorise this equation. This equation needs a little rearranging so that the right hand side equals 0 before we can start factorising, so let's do that. \\[x^2 - 4x + 3 = 0\\] Now we can factorise the left hand side. \\[(x - 3)(x - 1) = 0\\] Now, remember that \\(x\\) is just a placeholder for a number, therefore \\(x - 3\\) and \\(x - 1\\) are also just numbers that we don't know that value of. However, we do know that when we multiply \\(x - 3\\) and \\(x - 1\\) it equals \\(0\\)! This is very helpful because \\(2\\) numbers multiply to give \\(0\\) if and only if one of the numbers themself is also \\(0\\)."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "So in our case we can deduce that either \\[x - 3 = 0\\] or \\[x - 1 = 0\\] Therefore, solving the two equations above we get that the roots are \\(x = 3\\) and \\(x = 1\\)"
            }
          </MathJax>
        </div>
        <NextButton label={"Next"} path={"/quadratic-exercise-2"} />
      </div>
    </div>
  );
}

export default RootsLesson;
