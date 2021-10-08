import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
// import Category from "./components/category";
import WordHints from "./components/WordHints";
import Guess from "./components/Guess";
import Score from "./components/Score";
import Lives from "./components/Lives";
import { chooseWord } from "./utils";

function App() {
  const { category, word } = chooseWord();
  const [wordToGuess, setWordToGuess] = useState(word);
  const [categoryChosen, setCategory] = useState(category);
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
      <WordHints
        wordToGuess={wordToGuess}
        categoryChosen={categoryChosen}
        lettersGuessed={lettersGuessed}
      />
      {/* <Category */}
      {/* setWordToGuess={setWordToGuess} */}
      {/* wordToGuess={wordToGuess} */}
      {/* lettersGuessed={lettersGuessed} */}
      {/* /> */}
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
