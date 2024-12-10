import { useContext } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { ShowSideBarContext } from "../../Contexts/ShowSideBar";

function QuadraticFormula() {
  const { showSideBar } = useContext(ShowSideBarContext);
  return (
    <div className="lesson-container">
      <SideBar topic={"quadratics"} currPath={"/quadratic-formula"}></SideBar>
      <div
        className={showSideBar ? "lesson-with-margin" : "lesson-full-screen"}
      >
        <h1 className="lesson-name">The Quadratic Formula</h1>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default QuadraticFormula;
