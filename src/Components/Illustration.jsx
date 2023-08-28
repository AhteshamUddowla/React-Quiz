import signupImage from "../assets/images/signup.svg";
import classes from "../Styles/Illustration.module.css";

function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}

export default Illustration;
