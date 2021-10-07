import "./App.css";

import { useState } from "react";

import Header from "./header";
import Category from "./category";
import Guess from "./guess";
import Score from "./score";
import Lives from "./lives";

function App() {
  const [wordToGuess, setWordToGuess] = useState("");

  return (
    <div className="App">
      <Header id="header" />
      <Category
        id="category"
        setWordToGuess={setWordToGuess}
        wordToGuess={wordToGuess}
      />
      <Guess id="guess" />
      <Score id="score" />
      <Lives id="lives" />
    </div>
  );
}

export default App;
