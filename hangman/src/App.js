import "./App.css";
import Header from "./header";
import Category from "./category";
import Guess from "./guess";
import Score from "./score";
import Lives from "./lives";
function App() {
  return (
    <div className="App">
      <Header id="header" />
      <Category id="category" />
      <Guess id="guess" />
      <Score id="score" />
      <Lives id="lives" />
    </div>
  );
}

export default App;
