function Incorrect({ handleCheck, setShowHint, setFeedback }) {
  return (
    <>
      <p>Not quite! Try again or get a hint!</p>
      <button className="button" onClick={handleCheck}>
        Check Answer
      </button>
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
