import classes from "../Styles/Video.module.css";
import image from "../assets/images/3.jpg";

function Video() {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="Video Title" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}

export default Video;
