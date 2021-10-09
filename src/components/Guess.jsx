import { useState } from "react";

import LetterButton from "./LetterButton";

const Guess = ({
  correctGuess,
  wrongGuess,
  setLettersGuessed,
  livesRemain,
}) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  const chooseLetter = (letter) => {
    setLettersGuessed((prevState) => {
      return [...prevState, letter];
    });
  };

  return (
    <div id="guess">
      <div id="keyboard">
        {letters.map((letter) => (
          <LetterButton
            correctGuess={correctGuess.includes(letter)}
            wrongGuess={wrongGuess.includes(letter)}
            letter={letter}
            onClick={livesRemain > 0 ? () => chooseLetter(letter) : null}
          />
        ))}
      </div>
    </div>
  );
};

export default Guess;
