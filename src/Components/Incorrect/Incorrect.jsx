function Incorrect({
  handleCheck,
  setShowHint,
  setFeedback,
  quadraticFormula,
  handleNoSolutions,
}) {
  return (
    <>
      <p>Not quite! Try again or get a hint!</p>
      <div style={{ display: "flex" }}>
        <button
          className="button"
          onClick={handleCheck}
          style={{ margin: "20px" }}
        >
          Check Answer
        </button>
        {quadraticFormula ? (
          <button
            className="button"
            onClick={handleNoSolutions}
            style={{ margin: "20px" }}
          >
            No solutions
          </button>
        ) : null}
      </div>
      <button
        className="button"
        onClick={() => {
          setShowHint(true);
        }}
      >
        Get hint
      </button>
      <button
        className="button"
        onClick={() => {
          setFeedback("answer");
          setShowHint(false);
        }}
      >
        Reveal Answer
      </button>
    </>
  );
}

export default Incorrect;
