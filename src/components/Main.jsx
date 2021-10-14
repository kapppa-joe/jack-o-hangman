import React, { useState, useEffect } from "react";

import WordHints from "./WordHints";
import Guess from "./Guess";
import Lives from "./Lives";
import Hangman from "./Hangman";
import GameOver from "./GameOver";
import ResetButton from "./ResetButton";

import { chooseWord, judgeGuess } from "../utils";

const Main = (props) => {
  const { setJumpScareClass, incScore, resetScore, resetAnimationHasEnded } =
    props;

  const { category, word } = chooseWord();
  const [wordToGuess, setWordToGuess] = useState(word);
  const [categoryChosen, setCategory] = useState(category);
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [isGameOver, setGameOver] = useState(false);

  // actual function to reset game state.
  // not involve any animation
  const resetGame = ({ keepScore = false }) => {
    const { category, word } = chooseWord();
    setWordToGuess(word);
    setCategory(category);
    setLettersGuessed([]);
    setGameOver(false);
    setJumpScareClass([]);

    if (!keepScore) {
      resetScore();
    }
  };

  const { correctGuess, wrongGuess } = judgeGuess(lettersGuessed, wordToGuess);

  const maxLives = 6;
  const livesRemain = Math.max(maxLives - wrongGuess.length, 0);

  // if all letters are guessed
  const gotAllLetters = wordToGuess
    .split("")
    .every((letter) => lettersGuessed.includes(letter));

  if (gotAllLetters) {
    // TODO: make some winning effect and trigger here.
    incScore();
    resetGame({ keepScore: true });
  }

  useEffect(() => {
    if (livesRemain === 6) {
      setJumpScareClass([]);
    } else if (livesRemain === 4) {
      setTimeout(() => setJumpScareClass(["jump-scare-stage-1"]), 2000);
    } else if (livesRemain === 1) {
      setTimeout(() => setJumpScareClass(["jump-scare-stage-2"]), 2000);
    } else if (livesRemain === 0) {
      setJumpScareClass(["jump-scare-stage-2 game-over"]);
      setGameOver(true);
    }
  }, [livesRemain]);

  useEffect(() => {
    if (resetAnimationHasEnded) {
      resetGame({ keepScore: false });
    }
  }, [resetAnimationHasEnded]);

  return (
    <div id="main">
      <ResetButton resetGame={resetGame} />
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
      {isGameOver ? <GameOver /> : null}
    </div>
  );
};

export default Main;
