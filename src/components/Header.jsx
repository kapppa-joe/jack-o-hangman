import { ReactComponent as NooseSvg } from "../assets/image/noose.svg";

const Header = ({ resetGame }) => {
  return (
    <div id="header">
      <h1 className="game-title">Hangman</h1>
      <span className="reset-button" role="button" onClick={resetGame}>
        <NooseSvg className="reset-button-svg" />
        <span class="reset-button-text">Reset?</span>
      </span>
    </div>
  );
};

export default Header;
