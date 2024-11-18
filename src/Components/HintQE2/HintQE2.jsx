import { MathJax } from "better-react-mathjax";
import FactorTable from "../FactorTable/FactorTable";

function HintQE2({ bracket1, bracket2, bracketx1, bracketx2, showHint }) {
  const xSqCoe = bracketx1 * bracketx2;
  const factorsXSqCoe = [];
  for (let i = 2; i <= Math.sqrt(xSqCoe); i++) {
    if (xSqCoe % i === 0) {
      factorsXSqCoe.push([i, xSqCoe / i]);
    }
  }

  return (
    <div className={showHint ? "show-hint" : "hide-hint"}>
      <p>Here are the possible ways of factorising the equation:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MathJax
          style={{ margin: "5px" }}
        >{`\\((${xSqCoe}x + a)(x + b)\\)`}</MathJax>
        {factorsXSqCoe.map((factor, index) => (
          <MathJax
            style={{ margin: "5px" }}
            key={index}
          >{`\\((${factor[0]}x + a)(${factor[1]}x + b)\\)`}</MathJax>
        ))}
      </div>
      <p>And here are the factors of {bracket1 * bracket2}</p>
      <FactorTable constant={bracket1 * bracket2} />
      <p>Calculate:</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MathJax>{`\\(${xSqCoe}a + b\\)`}</MathJax>
        {factorsXSqCoe.map((factor, index) => (
          <MathJax key={index}>{`\\(${factor[1]}b + ${factor[1]}a\\)`}</MathJax>
        ))}
      </div>
      <p></p>
      <MathJax>{`for each row in the table, and try and find and pair that eqauls ${
        bracket1 * bracketx2 + bracket2 * bracketx1
      }. Remeber to swap the values of \\(a\\) and \\(b\\) for each pair of factors!`}</MathJax>
    </div>
  );
}

export default HintQE2;
