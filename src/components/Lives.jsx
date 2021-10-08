import { ReactComponent as Hangman } from "../assets/image/hangman.svg";
import BloodEffect from "./BloodEffect";

const hangmanPartsColors = {
  6: "--hangman-head-colour",
  5: "--hangman-body-colour",
  4: "--hangman-leftarm-colour",
  3: "--hangman-rightarm-colour",
  2: "--hangman-leftleg-colour",
  1: "--hangman-rightleg-colour",
};
const hangmanStyle = (lives) => {
  if (lives === "GAME OVER") {
    return { fill: "#000", "--background": "#F00" };
  }

  let style = { fill: "transparent" };
  for (const [num, partName] of Object.entries(hangmanPartsColors)) {
    if (lives < parseInt(num)) {
      style = { ...style, [partName]: "#000" };
    }
  }
  return style;
};

const Lives = ({ livesRemain }) => {
  return (
    <div id="lives">
      <span>Lives:{livesRemain}</span>
      <br />
      <Hangman style={hangmanStyle(livesRemain)} />
      {livesRemain === "GAME OVER" ? <BloodEffect /> : null}
    </div>
  );
};

export default Lives;
