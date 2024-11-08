import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import QuadraticLessonOne from "./Pages/QuadraticLessonOne/QuadraticLessonOne";
import { MathJaxContext } from "better-react-mathjax";
import QuadraticExerciseOne from "./Pages/QuadraticExerciseOne/QuadraticExerciseOne";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
};

function App() {
  return (
    <>
      <MathJaxContext config={config}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/quadratic-lesson-1"
            element={<QuadraticLessonOne />}
          ></Route>
          <Route
            path="/quadratic-exercise-1"
            element={<QuadraticExerciseOne />}
          ></Route>
        </Routes>
      </MathJaxContext>
    </>
  );
}

export default App;
