import splatter0 from "../assets/image/bloody-splatter-0.png";
import splatter1 from "../assets/image/bloody-splatter-1.svg";
import splatter2 from "../assets/image/bloody-splatter-2.svg";

const BloodEffect = () => {
  return (
    <div>
      <div
        className="overlay blood-effect show"
        style={{ backgroundImage: `url(${splatter0})` }}
      ></div>
      <div
        className="overlay blood-effect show delay1"
        style={{ backgroundImage: `url(${splatter1})` }}
      ></div>
      <div
        className="overlay blood-effect show delay2"
        style={{ backgroundImage: `url(${splatter2})` }}
      ></div>
    </div>
  );
};

export default BloodEffect;
