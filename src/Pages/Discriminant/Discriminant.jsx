import { useContext } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";
import { MathJax } from "better-react-mathjax";
import QuadraticGraph3 from "../../Components/Graphs/QuadraticGraph3";
import QuadraticGraph4 from "../../Components/Graphs/QuadraticGraph4";
import QuadraticGraph5 from "../../Components/Graphs/QuadraticGraph5";
import NextButton from "../../Components/NextButton/NextButton";

function Discriminant() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/discriminant"}></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">The Discriminant</h1>
        <div className="content">
          <MathJax>
            {
              "Before trying some questions yourself, there is one more thing I would like to mention. You have probably noticed that in most of the examples and questions, there have been two solutions for \\(x\\). Therefore, it is natural to wonder, is this always the case? Will there always be two answers for \\(x\\)?"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "The answer is no. A quadratic equation may have one, two, or no solutions. And we can find this information using the quadratic formula, or a small part of it called the discriminant. \\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\] The discriminant is the expression under the square root \\(b^2 - 4ac\\)."
            }
          </MathJax>
          <p></p>
          <div
            style={{
              borderWidth: "2px",
              borderColor: "#66fcf1",
              borderStyle: "solid",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <MathJax>
              {
                "If the discriminant is strictly positive i.e. \\(b^2 - 4ac > 0\\), then the quadratic equation \\(ax^2 +bx + c = 0\\) will have two distinct roots."
              }
            </MathJax>
          </div>
          <h2>Example 6</h2>
          <MathJax>
            {"How many roots does the equation \\(x^2 - 2 = 0\\) have?"}
          </MathJax>
          <p></p>
          <MathJax>
            {
              "We can answer this question using the discriminant. In our case \\(a = 1\\), \\(b = 0\\), and \\(c = -2\\), therefore \\(b^2 - 4ac = 0^2 - 4 * 1 * (-2) = 8\\). Since \\(8 > 0\\) telling us \\(x^2 + 8x + 2\\) has two distinct roots."
            }
          </MathJax>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QuadraticGraph3 />
          </div>
          <MathJax>
            {
              "Visually, when the discriminant is strictly positive this means that quadratic curve hits the \\(x\\) axis at two different points. In the graph above, you can see the \\(x\\) axis (the black line) interects with \\(x^2 - 2\\) (the red line) in two separate points."
            }
          </MathJax>
          <p></p>
          <div
            style={{
              borderWidth: "2px",
              borderColor: "#66fcf1",
              borderStyle: "solid",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <MathJax>
              {
                "If the discriminant equals zero i.e. \\(b^2 - 4ac = 0\\), then equation \\(ax^2 +bx + c\\) has one distinct root."
              }
            </MathJax>
          </div>
          <h2>Example 7</h2>
          <MathJax>
            {
              "How many distinct roots does the equation \\(x^2 + 2x + 1\\) have?"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "Again let's use the discriminant. In this case \\(a = 1\\), \\(b = 2\\), and \\(c = 1\\), so \\(b^2 - 4ac = 2^2 - 4 * 1 * 1 = 0\\)."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "This tells us that the equation has one distinct root. You might have noticed i've been saying the word 'distinct' a lot. If two roots are distinct, this just means that they have different values. The reason i'm using it is because technically \\(x^2 + 2x + 1\\) has two roots but one of them is a 'repeated' root. If this last part is confusing feel free to ignore it!"
            }
          </MathJax>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QuadraticGraph4 />
          </div>
          <MathJax>
            {
              "When the  discriminant equals zero this means that on a graph the quadratic will just skim the \\(x\\) axis at one point like the graph above does. "
            }
          </MathJax>
          <p></p>
          <div
            style={{
              borderWidth: "2px",
              borderColor: "#66fcf1",
              borderStyle: "solid",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <MathJax>
              {
                "If the discriminant is strictly negative i.e. \\(b^2 - 4ac < 0\\) then the equation has no real roots."
              }
            </MathJax>
          </div>
          <h2>Example 8</h2>
          <MathJax>
            {"How many real roots does the equation \\(x^2 + 10 = 0\\) have?"}
          </MathJax>
          <p></p>
          <MathJax>
            {
              "Calculating the discriminant one last time, we have \\(a = 1\\), \\(b = 0\\), and \\(c = 10\\) therefore \\(b^2 -4ac = 0^2 - 4* 1 * 10 = -40\\). As the discriminant, \\(-40\\), is strictly less than zero, we can conclude that the equation has no real roots."
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "If we have a negative discriminant then in the quadratic formula, \\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\] the part under the square root will be negative. The square of a number is always positive, therefore we cannot take the square root of a negative number. Or can we? If you take A-level maths you will learn about a new type of number called a 'complex' number. If we include complex numbers then the square root of a negative number isn't an issue and all quadratic equations will have solutions!"
            }
          </MathJax>
          <p></p>
          <MathJax>
            {
              "However, back to GCSE land, our equations has no real roots and on a graph this means that the quadratic curve will lie completely above the \\(x\\) axis."
            }
          </MathJax>
          <div
            style={{
              backgroundColor: "white",
              margin: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <QuadraticGraph5 />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <NextButton label={"Next"} path={"/quadratic-formula-exercises"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discriminant;
