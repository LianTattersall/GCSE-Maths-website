import { useContext } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import { MathJax } from "better-react-mathjax";
import NextButton from "../../Components/NextButton/NextButton";
import "../Lesson.css";

function QuadraticFormula() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar
        className="sidebar"
        topic={"quadratics"}
        currPath={"/quadratic-formula"}
      ></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">The Quadratic Formula</h1>
        <div className="content">
          <MathJax>
            {"Find the roots of the equation \\(x^2 + 7x + 5 = 0\\)."}
          </MathJax>
          <p></p>
          <MathJax>
            {
              "Unfortunately, we cannot factorise this equation using our method of listing factors. The factors of \\(5\\) are:"
            }
          </MathJax>
          <p></p>
          <table>
            <thead>
              <tr>
                <td>Factor 1</td>
                <td>Factor 2</td>
                <td>Sum</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr>
                <td>-1</td>
                <td>-5</td>
                <td>-6</td>
              </tr>
            </tbody>
          </table>
          <p></p>
          <MathJax>
            {
              "Neither of these options sum to \\(7\\) so our method breaks down. This is because this equation does not have whole number solutions (also called integer solutions) and our previous method relied on the fact the roots were whole numbers."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "In other words the roots will have decimal places like 2.3465. And we can't check all decimal numbers that multiply to \\(5\\) and see if they sum to \\(7\\) because there are infinitely many!"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "So far our methods for solving quadratic equations have been plotting the equation and finding the intersection points, and factorising. Let me introduce you to yet another method: The Quadratic Formula!"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "If \\(ax^2 + bx + c = 0\\) then the roots are: \\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\] Now DON'T PANICK!!! It looks like a complicated formula but it's fairly simple to use."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "You might be wondering what this strange symbol \\(\\pm\\) is? It is called 'plus minus' and it is a short hand way of saying \\(+\\) or \\(-\\). So in our case it is a short hand way of saying that both \\(x = \\frac{-b + \\sqrt{b^2 - 4ac}}{2a}\\) and \\(x = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a}\\) are roots of the equation."
            }
          </MathJax>
          <h2>Example 5</h2>
          <MathJax>
            {"Find the roots of the equation \\(x^2 + 7x + 5 = 0\\)."}
          </MathJax>
          <p></p>
          <MathJax>
            {
              "In our case \\(a = 1\\), \\(b = 7\\), and \\(c = 5\\). Now we just have to plug these numbers into the formula. \\[x = \\frac{-7 \\pm \\sqrt{7^2 - 4 * 1 * 5}}{2 * 1}\\] Therefore, simplifying the numbers slightly we have that the roots are, \\[x = \\frac{-7+\\sqrt{29}}{2}\\] and \\[x = \\frac{-7-\\sqrt{29}}{2}\\]"
            }
          </MathJax>
          <MathJax>
            {
              "In an exam pay attention to what format the answer should be in. Sometimes they might want it in it's exact form with the square root, and sometimes they might ask for the roots rounded to a cirtain number of decimal places or significant figures. If it is the latter, just plug these numbers into your calculator and round appropriately! To \\(2\\) decimal places \\(x =-0.81\\) and \\(x = -6.19\\)."
            }
          </MathJax>
          <p></p>
          <p>
            If you would like to know why this formula works, check out this{" "}
            <a
              href="https://www.mathsisfun.com/algebra/quadratic-equation-derivation.html"
              style={{ color: "#c5c6c7" }}
              target="_blank"
            >
              website
            </a>{" "}
            for an explanation. It might help if you have learnt how to
            'complete the square' first.
          </p>
          <p></p>
          <MathJax>
            {
              "Now I have some bad news and some good news. The bad news: You have to remember this formula for your exam. The good news: Memorising this formula is much easier with this amazing song!"
            }
          </MathJax>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/E2eVZFy9yzk?si=ewE8SL4XnJX9R8Ol"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={true}
            ></iframe>
            <div style={{ marginTop: "20px" }}>
              <NextButton label={"Next"} path={"/discriminant"}></NextButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuadraticFormula;
