import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import { ReactComponent as NooseSvg } from "../assets/image/noose.svg";
import { ReactComponent as LargeNoose } from "../assets/image/large-noose.svg";

const Header = ({ resetGame }) => {
  const [performReset, setPerformReset] = useState(false);
  const [showResetSplash, setShowResetSplash] = useState(false);

  const pressReset = () => {
    setPerformReset(true);
  };

  return (
    <div id="header">
      <h1 className="game-title">Hangman</h1>
      <span className="reset-button" role="button" onClick={pressReset}>
        <CSSTransition
          classNames="noose-retract"
          timeout={500}
          in={!performReset}
          onExited={() => {
            setShowResetSplash(true);
          }}
        >
          <NooseSvg className="reset-button-svg" />
        </CSSTransition>
        <span class="reset-button-text">Reset?</span>
      </span>

      <CSSTransition
        classNames="drop-noose"
        timeout={1000}
        in={showResetSplash}
        appear={false}
        onEnter={() => {
          setTimeout(() => setShowResetSplash(false), 1000);
        }}
        onExit={() => {
          setPerformReset(false);
          resetGame();
        }}
      >
        <div className="reset-splash">
          <LargeNoose className="large-noose" />
        </div>
      </CSSTransition>
    </div>
  );
};

export default Header;
