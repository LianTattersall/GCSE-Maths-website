import { MathJax } from "better-react-mathjax";
import SideBar from "../../Components/SideBar/SideBar";
import "../Lesson.css";
import NextButton from "../../Components/NextButton/NextButton";
import { useContext } from "react";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";

function QuadraticLessonOne() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar
        className="sidebar"
        topic={"quadratics"}
        currPath={"/quadratic-lesson-1"}
      ></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">Factorising Quadratics</h1>
        <div className="content">
          <MathJax>
            {
              "You might have factorised linear expressions such as \\(5x + 10\\) in to \\(5(x + 2)\\) but how would you go about factorising something like \\(x^2 + 5x + 6\\)?"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "\n Notice that we have an \\(x^2\\) or a 'quadratic term' in our expression, therefore we can't use the same approach as we did before. When factorising quadratics (expressions with an \\(x^2\\)), we're going to end up with two brackets. The answer will look something like: \\[(x + a)(x + b)\\] where \\(a\\) and \\(b\\) are replaced with actual numbers."
            }
          </MathJax>
          <h2>Example 1</h2>
          <MathJax>
            {
              "Let's try and factorise \\(x^2 + 5x + 6\\). We know the answer will have the form \\((x + a)(x + b)\\), so let's expand these brackets to try and work the values of \\(a\\) and \\(b\\). \\[x^2 + (a + b)x + ab\\] Compare this with \\[x^2 + 5x + 6\\] By matching up the corresponding terms, we can see that \\[(a + b) = 5\\] \\[ab = 6\\] Can you think of two numbers the add up to \\(5\\) and multiply to \\(6\\)? You might have been able to spot that \\(a = 3\\) and \\(b = 2\\) does the trick, if not fear not as there is a method we can follow to find the answer!"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "If we can't immedatly spot the answer all we have to do is list the factors of \\(6\\) until we find the pair that sums to \\(5\\)!"
            }
          </MathJax>
          <p></p>
        </div>
        <table className="content">
          <thead>
            <tr>
              <th>factor 1</th>
              <th>factor 2</th>
              <th>sum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr style={{ color: "#66fcf1" }}>
              <td>2</td>
              <td>3</td>
              <td>5</td>
            </tr>
            <tr>
              <td>-1</td>
              <td>-6</td>
              <td>-7</td>
            </tr>
            <tr>
              <td>-2</td>
              <td>-3</td>
              <td>-5</td>
            </tr>
          </tbody>
        </table>

        <p className="content">
          <MathJax>
            {
              "Therefore the factorisation of \\(x^2 + 5x + 6\\) is \\((x + 3)(x + 2)\\). Now have a go at factorising quadratics yourself!"
            }
          </MathJax>
        </p>
        <NextButton label={"Next"} path={"/quadratic-exercise-1"}></NextButton>
      </div>
    </div>
  );
}

export default QuadraticLessonOne;
