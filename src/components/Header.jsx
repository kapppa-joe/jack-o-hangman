import { ReactComponent as NooseSvg } from "../assets/image/noose.svg";

const Header = ({ resetGame }) => {
  return (
    <div id="header">
      <h1 className="game-title">Hangman</h1>
      <span className="reset-button" role="button" onClick={resetGame}>
        <NooseSvg
          className="reset-button-svg"
          style={{
            stroke: "#CCC",
            fill: "#333",
            height: "auto",
          }}
        />
        <span class="reset-button-text">Reset?</span>
      </span>
    </div>
  );
};

export default Header;
