import "./App.css";

import { useState, useEffect } from "react";

import DisplayScore from "./components/DisplayScore";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [score, setScore] = useState(0);
  const [jumpScareClass, setJumpScareClass] = useState([]);
  const [resetAnimationHasEnded, setResetAnimationEnded] = useState(false);

  const resetScore = () => setScore(0);
  const incScore = () => setScore((prevScore) => prevScore + 1);

  return (
    <div className={`App ${jumpScareClass.join(" ")}`}>
      <DisplayScore score={score} />
      <Header setResetAnimationEnded={setResetAnimationEnded} />

      <Main
        incScore={incScore}
        resetScore={resetScore}
        setJumpScareClass={setJumpScareClass}
        resetAnimationHasEnded={resetAnimationHasEnded}
      />
    </div>
  );
}

export default App;
