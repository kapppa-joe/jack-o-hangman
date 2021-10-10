import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import WordHints from "./components/WordHints";
import Guess from "./components/Guess";
import Lives from "./components/Lives";
import GameOver from "./components/GameOver";

import { chooseWord, judgeGuess } from "./utils";

function App() {
  const { category, word } = chooseWord();

  const [wordToGuess, setWordToGuess] = useState(word);
  const [categoryChosen, setCategory] = useState(category);
  const [lettersGuessed, setLettersGuessed] = useState([]);
  const [jumpScareClass, setJumpScareClass] = useState([]);
  const [isGameOver, setGameOver] = useState(false);

  const resetGame = () => {
    const { category, word } = chooseWord();
    setWordToGuess(word);
    setCategory(category);
    setLettersGuessed([]);
    setGameOver(false);
  };

  const { correctGuess, wrongGuess } = judgeGuess(lettersGuessed, wordToGuess);

  const maxLives = 6;
  const livesRemain = Math.max(maxLives - wrongGuess.length, 0);

  useEffect(() => {
    if (livesRemain === 6) {
      setJumpScareClass([]);
    } else if (livesRemain === 4) {
      // randomize jumpScare timing.
      setTimeout(
        () => setJumpScareClass((prev) => [...prev, "red-flash"]),
        Math.random() * 5000
      );
    } else if (livesRemain === 2) {
      setTimeout(
        () => setJumpScareClass((prev) => [...prev, "glitch"]),
        Math.random * 3000
      );
    } else if (livesRemain === 0) {
      setJumpScareClass([]);
      setGameOver(true);
      // setTimeout(setJumpScareClass(["red-flash", "glitch"]), 1000);
    }
  }, [livesRemain]);

  return (
    <div className={`App ${jumpScareClass.join(" ")}`}>
      <Header resetGame={resetGame} />
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
      {isGameOver ? <GameOver /> : null}
    </div>
  );
}

export default App;
