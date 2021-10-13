import "./App.css";

import { useState, useEffect } from "react";

import DisplayScore from "./components/DisplayScore";
import Header from "./components/Header";
import Main from "./components/Main";
import GameOver from "./components/GameOver";

import { chooseWord, judgeGuess } from "./utils";

function App() {
  const { category, word } = chooseWord();
  const [wordToGuess, setWordToGuess] = useState(word); // m
  const [categoryChosen, setCategory] = useState(category); //m

  const [score, setScore] = useState(0); // k

  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [jumpScareClass, setJumpScareClass] = useState([]); //k
  const [isGameOver, setGameOver] = useState(false);

  const resetGame = ({ keepScore = false }) => {
    const { category, word } = chooseWord();
    setWordToGuess(word);
    setCategory(category);
    setLettersGuessed([]);
    setGameOver(false);

    if (!keepScore) {
      setScore(0);
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
    setScore((currScore) => currScore + 1);
    resetGame({ keepScore: true });
  }

  useEffect(() => {
    if (livesRemain === 6) {
      setJumpScareClass([]);
    } else if (livesRemain === 4) {
      // randomize jumpScare timing.
      setTimeout(
        () => setJumpScareClass((prev) => [...prev, "jump-scare-stage-1"]),
        Math.random() * 5000
      );
    } else if (livesRemain === 2) {
      setTimeout(
        () => setJumpScareClass((prev) => [...prev, "jump-scare-stage-2"]),
        Math.random * 3000
      );
    } else if (livesRemain === 0) {
      setJumpScareClass([]);
      setGameOver(true);
    }
  }, [livesRemain]);

  return (
    <div className={`App ${jumpScareClass.join(" ")}`}>
      <DisplayScore score={score} />
      <Header resetGame={resetGame} />

      <Main
        wordToGuess={wordToGuess}
        categoryChosen={categoryChosen}
        lettersGuessed={lettersGuessed}
        setLettersGuessed={setLettersGuessed}
        correctGuess={correctGuess}
        wrongGuess={wrongGuess}
        maxLives={maxLives}
        livesRemain={livesRemain}
      />
      {isGameOver ? <GameOver /> : null}
    </div>
  );
}

export default App;
