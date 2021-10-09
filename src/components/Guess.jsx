import { useState } from "react";

import LetterButton from "./LetterButton";

const Guess = ({ correctGuess, wrongGuess, setLettersGuessed, gameOver }) => {
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
            gameOver={gameOver}
            correctGuess={correctGuess.includes(letter)}
            wrongGuess={wrongGuess.includes(letter)}
            letter={letter}
            onClick={() => chooseLetter(letter)}
          />
        ))}
      </div>
    </div>
  );
};

export default Guess;
