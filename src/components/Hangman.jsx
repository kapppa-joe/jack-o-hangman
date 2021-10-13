import React from "react";

import { ReactComponent as HangmanSvg } from "../assets/image/hangman.svg";

const hangmanPartsNames = {
  6: "--hangman-head-colour",
  5: "--hangman-body-colour",
  4: "--hangman-leftarm-colour",
  3: "--hangman-rightarm-colour",
  2: "--hangman-leftleg-colour",
  1: "--hangman-rightleg-colour",
};

// util function for generating style of hangman graphic
const hangmanStyle = (livesRemain) => {
  if (livesRemain === 0) {
    return { fill: "#F00", "--background": "transparent" };
  }

  let style = { fill: "transparent" };
  for (const [num, partName] of Object.entries(hangmanPartsNames)) {
    if (livesRemain < parseInt(num)) {
      style = { ...style, [partName]: "#000" };
    }
  }
  return style;
};

const Hangman = ({ livesRemain }) => {
  return (
    <div id="hangman">
      <HangmanSvg id="hangman-svg" style={hangmanStyle(livesRemain)} />
    </div>
  );
};

export default Hangman;
