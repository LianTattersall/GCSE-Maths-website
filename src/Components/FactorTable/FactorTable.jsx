import { MathJax } from "better-react-mathjax";
import "./FactorTable.css";

function FactorTable({ root1, root2, showHint }) {
  const constant = root1 * root2;
  const absConstant = Math.abs(root1 * root2);
  const absFactors = [];

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

  for (let i = 1; i <= Math.sqrt(absConstant); i++) {
    if (absConstant % i === 0) {
      absFactors.push([i, absConstant / i]);
    }
  }

  const factors = [];
  if (constant < 0) {
    absFactors.forEach((factor) => {
      factors.push([factor[0], -factor[1]]);
      factors.push([-factor[0], factor[1]]);
    });
  } else if (constant > 0) {
    absFactors.forEach((factor) => {
      factors.push([factor[0], factor[1]]);
      factors.push([-factor[0], -factor[1]]);
    });
  }

  return (
    <div className={showHint ? "show-hint" : "hide-hint"}>
      <p>
        Heres a table of all the factors of {root1 * root2}. Try and find the
        pair that has a sum of {root1 + root2}!
      </p>
      <table>
        <thead>
          <tr>
            <td>Factor 1</td>
            <td>Factor 2</td>
          </tr>
        </thead>
        <tbody>
          {factors.map((factor, index) => (
            <tr key={index}>
              <td>{factor[0]}</td>
              <td>{factor[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FactorTable;
