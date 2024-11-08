import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">GCSE Maths Quest</h1>
      <Link to="/quadratic-lesson-1">
        <button className="home-button">
          <p className="topic">Quadratic Quest</p>
        </button>
      </Link>
      <button className="home-button">
        <p className="topic">Trigonometry Quest</p>
      </button>
      <button className="home-button">
        <p className="topic">Completing The Square Quest</p>
      </button>
    </div>
  );
}

export default Home;
