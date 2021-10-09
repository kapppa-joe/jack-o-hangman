import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import WordHints from "./components/WordHints";
import Guess from "./components/Guess";
import Lives from "./components/Lives";
import { chooseWord, judgeGuess } from "./utils";

function App() {
  const { category, word } = chooseWord();
  const [wordToGuess, setWordToGuess] = useState(word);
  const [categoryChosen, setCategory] = useState(category);
  const [lettersGuessed, setLettersGuessed] = useState([]);

  const resetGame = () => {
    const { category, word } = chooseWord();
    setWordToGuess(word);
    setCategory(category);
    setLettersGuessed([]);
  };

  const { correctGuess, wrongGuess } = judgeGuess(lettersGuessed, wordToGuess);

  const maxLives = 6;
  const livesRemain = Math.max(maxLives - wrongGuess.length, 0);

  return (
    <div className="App">
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
      />
      <Lives livesRemain={livesRemain} />
    </div>
  );
}

export default App;
