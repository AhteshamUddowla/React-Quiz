import classes from "../Styles/Illustration.module.css";

// eslint-disable-next-line react/prop-types
function Illustration({ image }) {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
}

export default Illustration;
