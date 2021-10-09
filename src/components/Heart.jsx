import { ReactComponent as HeartSvg } from "../assets/image/hearts.svg";

const Heart = (props) => {
  const { isBlack } = props;
  const style = {
    height: "1em",
    width: "1em",
    "--hearts-init-animation-delay": "0ms",
  };
  if (isBlack) {
    style["--hearts-init-opacity"] = 1;
    style["--red-heart-colour"] = "#666";
    style["--heart-animation-state"] = "paused";
  }

  return <HeartSvg style={style} />;
};

export default Heart;
