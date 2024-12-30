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
import RootsLesson from "./Pages/RootsLesson/RootsLesson";
import QuadraticChallenges from "./Pages/QuadraticChallenges/QuadraticChallenges";
import QuadraticFormula from "./Pages/QuadraticFormula/QuadraticFormula";
import Discriminant from "./Pages/Discriminant/Discriminant";
import QuadraticFormulaExercises from "./Pages/QuadraticFormulaExercises/QuadraticFormulaExercises";

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
            <Route path="/roots-lesson" element={<RootsLesson />}></Route>
            <Route
              path="/quadratic-challenges"
              element={<QuadraticChallenges />}
            ></Route>
            <Route
              path="/quadratic-formula"
              element={<QuadraticFormula />}
            ></Route>
            <Route path="/discriminant" element={<Discriminant />}></Route>
            <Route
              path={"/quadratic-formula-exercises"}
              element={<QuadraticFormulaExercises />}
            ></Route>
          </Routes>
        </ShowSideBarPovider>
      </MathJaxContext>
    </>
  );
}

export default App;
