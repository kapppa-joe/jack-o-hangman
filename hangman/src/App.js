import "./App.css";

import { useState } from "react";

import Header from "./header";
import Category from "./category";
import Guess from "./guess";
import Score from "./score";
import Lives from "./lives";

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [lettersGuessed, setLettersGuessed] = useState([]);

  const maxLives = 6;
  let livesRemain = maxLives;
  for (const letter of lettersGuessed) {
    if (!wordToGuess.includes(letter)) {
      livesRemain -= 1;
      if (livesRemain === 0) {
        livesRemain = "GAME OVER";
      }
    }
  }

  const resetGame = () => {
    setWordToGuess("");
    setLettersGuessed([]);
  };

  return (
    <div className="App">
      <Header resetGame={resetGame} />
      <Category
        setWordToGuess={setWordToGuess}
        wordToGuess={wordToGuess}
        lettersGuessed={lettersGuessed}
      />
      <Guess
        setLettersGuessed={setLettersGuessed}
        lettersGuessed={lettersGuessed}
      />
      <Score
        lettersGuessed={lettersGuessed}
        wordToGuess={wordToGuess}
        resetGame={resetGame}
      />
      <Lives livesRemain={livesRemain} />
    </div>
  );
}

export default App;
