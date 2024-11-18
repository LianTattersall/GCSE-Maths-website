import NextButton from "../NextButton/NextButton";

function Correct({ handleReset, path }) {
  return (
    <>
      <p>Correct! Well Done!</p>
      <button className="button" onClick={handleReset}>
        New question
      </button>
      <NextButton label={"Next"} path={path}></NextButton>
    </>
  );
}

export default Correct;
