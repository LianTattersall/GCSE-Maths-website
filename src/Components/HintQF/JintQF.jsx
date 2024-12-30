import { MathJax } from "better-react-mathjax";
import "./HintQF.css";

function HintQF({ x, xsq, constant, showHint }) {
  const disc = x ** 2 - 4 * xsq * constant;

  return (
    <div className={showHint ? "show-hint" : "hide-hint"}>
      {disc >= 0 ? (
        <MathJax>
          {`Here's the quadratic formula: If \\(ax^2 + bx + c = 0\\), then \\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\] In this case \\(a = ${xsq}\\), \\(b = ${x}\\), and \\(c = ${constant}\\). Double check you've entered it correctly in your calculator!`}
        </MathJax>
      ) : (
        <MathJax>
          {
            "Does this equation have any roots? Calculate the discriminant if you're not sure."
          }
        </MathJax>
      )}
    </div>
  );
}

export default HintQF;
