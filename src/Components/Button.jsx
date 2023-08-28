import classes from "../Styles/Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ className, children }) {
  return <div className={`${classes.button} ${className}`}>{children}</div>;
}

export default Button;
