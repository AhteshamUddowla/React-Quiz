import classes from "../Styles/Answers.module.css";
import CheckBox from "./CheckBox";

function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="Test answer" />
    </div>
  );
}

export default Answers;
