import splatter from "../assets/image/bloody-splatter-0.png";

const GameOver = () => {
  return (
    <div>
      <div
        className="overlay blood-effect gameover non-clickable"
        style={{
          backgroundColor: "rgba(255, 0, 0, 0.8)",
          backgroundImage: `url(${splatter})`,
        }}
      ></div>
      <div className="overlay gameover-message non-clickable">You lose.</div>
    </div>
  );
};

export default GameOver;
