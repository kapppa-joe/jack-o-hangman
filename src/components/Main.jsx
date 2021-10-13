import React from "react";

import WordHints from "./WordHints";
import Guess from "./Guess";
import Lives from "./Lives";
import Hangman from "./Hangman";

const Main = (props) => {
  const {
    wordToGuess,
    categoryChosen,
    lettersGuessed,
    setLettersGuessed,
    correctGuess,
    wrongGuess,
    isGameOver,
    maxLives,
    livesRemain,
  } = props;
  return (
    <div id="main">
      <WordHints
        wordToGuess={wordToGuess}
        categoryChosen={categoryChosen}
        lettersGuessed={lettersGuessed}
      />
      <Guess
        setLettersGuessed={setLettersGuessed}
        correctGuess={correctGuess}
        wrongGuess={wrongGuess}
        usGameOver={isGameOver}
      />
      <Lives maxLives={maxLives} livesRemain={livesRemain} />
      <Hangman livesRemain={livesRemain} />
    </div>
  );
};

export default Main;
