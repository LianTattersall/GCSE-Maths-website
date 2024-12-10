import { useState } from "react";
import "./FlipCard.css";

function FlipCard({ number, children }) {
  const [showHint, setShowHint] = useState(false);
  return (
    <button
      style={{
        margin: "0px",
        padding: "0px",
        borderWidth: "0px",
        background: "transparent",
      }}
      onClick={() => {
        setShowHint((curr) => !curr);
      }}
    >
      <div className="flip-card">
        <div className={`flip-card-inner ${showHint}`}>
          <div className="front">
            <p>{`Hint ${number}`}</p>
          </div>
          <div className="back">{children}</div>
        </div>
      </div>
    </button>
  );
}

export default FlipCard;
