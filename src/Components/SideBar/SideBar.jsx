import { useEffect, useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar({ topic, currPath }) {
  const [levels, setLevels] = useState([]);
  const quadraticLevels = [
    [
      { label: "Factorising Quadratics Lesson", path: "/quadratic-lesson-1" },
      {
        label: "Factorising Quadratics Exercise",
        path: "/quadratic-exercise-1",
      },
    ],
  ];

  useEffect(() => {
    if (topic === "quadratics") {
      setLevels(quadraticLevels);
    }
  }, []);

  function renderLevel(level) {
    return level.map((subLevel, i) => {
      const backgroundColour =
        currPath === subLevel.path ? "#0b0c10" : "transparent";
      const textColour = currPath === subLevel.path ? "#c5c6c7" : "551a8b";
      return (
        <Link
          to={subLevel.path}
          key={`sub${i}`}
          style={{ textDecorationColor: textColour }}
        >
          <p
            className="lesson-label"
            style={{ backgroundColor: backgroundColour, color: textColour }}
          >
            {subLevel.label}
          </p>
        </Link>
      );
    });
  }
  return (
    <div className="sidebar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <h2 key={"home"} className="go-home-button">
          Home
        </h2>
      </Link>
      {levels.map((level, index) => {
        return (
          <div key={index}>
            <h2 className="level-number">{`Level ${index + 1}`}</h2>
            {renderLevel(level)}
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
