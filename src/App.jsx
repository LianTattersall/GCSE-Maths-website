import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import QuadraticLessonOne from "./Pages/QuadraticLessonOne/QuadraticLessonOne";
import { MathJaxContext } from "better-react-mathjax";
import QuadraticExerciseOne from "./Pages/QuadraticExerciseOne/QuadraticExerciseOne";
import { ShowSideBarPovider } from "./Contexts/ShowSideBar";
import QuadraticLessonTwo from "./Pages/QuadraticLessonTwo/QuadraticLessonTwo";
import QuadraticExerciseTwo from "./Pages/QuadraticExerciseTwo/QuadraticExerciseTwo";

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
        <ShowSideBarPovider>
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
            <Route
              path="/quadratic-lesson-2"
              element={<QuadraticLessonTwo />}
            ></Route>
            <Route
              path="/quadratic-exercise-2"
              element={<QuadraticExerciseTwo />}
            ></Route>
          </Routes>
        </ShowSideBarPovider>
      </MathJaxContext>
    </>
  );
}

export default App;
