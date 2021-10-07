import "./App.css";

import { useState } from "react";

import Header from "./header";
import Category from "./category";
import Guess from "./guess";
import Score from "./score";
import Lives from "./lives";

function App() {
  const initialGame = {
    lives: 6,
    wordToGuess: "",
    lettersGuessed: [],
  };

  const [gameSession, setGameSession] = useState(initialGame);

  // const [wordToGuess, setWordToGuess] = useState("");
  // const [lettersGuessed, setLettersGuessed] = useState([]);

  // const maxLives = 6;
  // let livesRemain = maxLives;
  for (const letter of gameSession.lettersGuessed) {
    if (!gameSession.wordToGuess.includes(letter)) {
      gameSession.lives -= 1;
    }
  }
  console.log("lives remains: ", gameSession.livesRemain);

  const resetGame = () => {};

  return (
    <div className="App">
      <Header />
      <Category
        // setWordToGuess={setWordToGuess}
        // wordToGuess={wordToGuess}
        // lettersGuessed={lettersGuessed}
        gameSession={gameSession}
      />
      <Guess
        // setLettersGuessed={setLettersGuessed}
        // lettersGuessed={lettersGuessed}
        gameSession={gameSession}
      />
      <Score />
      <Lives
        // livesRemain={livesRemain}
        gameSession={gameSession}
      />
    </div>
  );
}

export default App;
