import { useContext, useEffect, useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";

function SideBar({ topic, currPath }) {
  const [levels, setLevels] = useState([]);
  const { showSideBar, setShowSideBar } = useContext(ShowSideBarContext);
  const quadraticLevels = [
    [
      { label: "Factorising Quadratics Lesson", path: "/quadratic-lesson-1" },
      {
        label: "Factorising Quadratics Exercise",
        path: "/quadratic-exercise-1",
      },
    ],
    [
      { label: "Harder Quadratics Lesson", path: "/quadratic-lesson-2" },
      {
        label: "Harder Quadratics Exercise",
        path: "/quadratic-exercise-2",
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
    <>
      <button
        className="show-button"
        onClick={() => {
          setShowSideBar(true);
        }}
      >
        Show Menu
      </button>
      <div className={showSideBar ? "show-side-bar" : "hide-side-bar"}>
        <button
          className="hide-menu"
          onClick={() => {
            setShowSideBar(false);
          }}
        >
          Hide Menu
        </button>
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
    </>
  );
}

export default SideBar;
