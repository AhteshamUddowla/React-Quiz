import classes from "../Styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ className, children }) {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default Button;
