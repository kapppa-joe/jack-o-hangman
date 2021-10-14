import { useState } from "react";

const Header = ({ setResetAnimationEnded }) => {
  return (
    <div id="header">
      <h1 className="game-title">
        <span className="pumpkin">　</span>
        <span className="header-text">jack-o-hangman</span>
        <span className="pumpkin">　</span>
      </h1>
    </div>
  );
};

export default Header;
