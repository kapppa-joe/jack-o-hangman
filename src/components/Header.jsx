import { useState } from "react";

const Header = ({ setResetAnimationEnded }) => {
  const [performReset, setPerformReset] = useState(false);
  const [showResetSplash, setShowResetSplash] = useState(false);

  const pressReset = () => {
    setPerformReset(true);
  };

  return (
    <div id="header">
      <h1 className="game-title">
        <span className="pumpkin">　</span>
        <span className="header-text">hang-o-lantern</span>
        <span className="pumpkin">　</span>
      </h1>

      {/* <span className="reset-button" role="button" onClick={pressReset}>
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
          setResetAnimationEnded(true);
        }}
      >
        <div className="reset-splash">
          <JackoLantern className="reset-splash-graphic" />
        </div>
      </CSSTransition> */}
    </div>
  );
};

export default Header;
