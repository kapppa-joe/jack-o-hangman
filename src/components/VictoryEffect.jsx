import { CSSTransition } from "react-transition-group";
import React from "react";

const VictoryEffect = ({ setVictory }) => {
  return (
    <div class="overlay victory-effect non-clickable">
      <CSSTransition
        classNames="green-glow"
        appear={true}
        timeout={2000}
        in={true}
        onEntered={() => setVictory(false)}
      >
        <span class="green-glow"></span>
      </CSSTransition>
    </div>
  );
};

export default VictoryEffect;
