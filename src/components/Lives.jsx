import { ReactComponent as Hangman } from "../assets/image/hangman.svg";

import BloodEffect from "./BloodEffect";
import Heart from "./Heart";

const hangmanPartsNames = {
  6: "--hangman-head-colour",
  5: "--hangman-body-colour",
  4: "--hangman-leftarm-colour",
  3: "--hangman-rightarm-colour",
  2: "--hangman-leftleg-colour",
  1: "--hangman-rightleg-colour",
};
const hangmanStyle = (lives) => {
  if (lives === 0) {
    return { fill: "#000", "--background": "#F00" };
  }

  let style = { fill: "transparent" };
  for (const [num, partName] of Object.entries(hangmanPartsNames)) {
    if (lives < parseInt(num)) {
      style = { ...style, [partName]: "#000" };
    }
  }
  return style;
};

const Lives = ({ livesRemain, maxLives }) => {
  return (
    <div id="lives">
      <span>
        Lives:
        <br />
        {Array(maxLives)
          .fill()
          .map((elem, i) => {
            if (i + 1 <= livesRemain) {
              return <Heart key={i} />;
            } else {
              return <Heart isBlack={true} />;
            }
          })}
      </span>
      <br />
      <Hangman style={hangmanStyle(livesRemain)} />
      {livesRemain === 0 ? <BloodEffect /> : null}
    </div>
  );
};

export default Lives;
