// import { ReactComponent as HangmanSvg } from "../assets/image/hangman.svg";

import Heart from "./Heart";

const Lives = ({ livesRemain, maxLives }) => {
  return (
    <div id="lives">
      <div id="lives-label">Lives:</div>
      <div id="hearts">
        {Array(maxLives)
          .fill()
          .map((elem, i) => {
            if (i + 1 <= livesRemain) {
              return <Heart key={i} />;
            } else {
              return <Heart isBlack={true} />;
            }
          })}
      </div>

      {/* <HangmanSvg id="hangman" style={hangmanStyle(livesRemain)} /> */}
    </div>
  );
};

export default Lives;
