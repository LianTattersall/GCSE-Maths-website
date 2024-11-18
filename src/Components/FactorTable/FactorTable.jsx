import { MathJax } from "better-react-mathjax";

function FactorTable({ constant }) {
  const absConstant = Math.abs(constant);
  const absFactors = [];

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
    <table>
      <thead>
        <tr>
          <td>
            <MathJax>{"Factor 1 \\((a)\\)"}</MathJax>
          </td>
          <td>
            <MathJax>{"Factor 2 \\((b)\\)"}</MathJax>
          </td>
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
  );
}

export default FactorTable;
