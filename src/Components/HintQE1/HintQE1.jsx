import { MathJax } from "better-react-mathjax";
import "./HintQE1.css";
import FactorTable from "../FactorTable/FactorTable";

function HintQE1({ root1, root2, showHint }) {
  const constant = root1 * root2;

  if (constant === 0) {
    return (
      <div className={showHint ? "show-hint" : "hide-hint"}>
        <MathJax>
          {
            "When there is no constant (i.e the constant equals 0) the approach is slightly different. One of the numbers in the brackets will be zero. Can you use this to figure out the second number?"
          }
        </MathJax>
      </div>
    );
  }

  return (
    <div className={showHint ? "show-hint" : "hide-hint"}>
      <p>
        Here's a table of all the factors of {root1 * root2}. Try and find the
        pair that has a sum of {root1 + root2}!
      </p>
      <FactorTable constant={root1 * root2} />
      <p></p>
      <p>
        <span style={{ fontWeight: "bolder" }}>Tip: </span>To check your answer,
        why not expand the brackets and see if it matches the original
        expression!
      </p>
    </div>
  );
}

export default HintQE1;
