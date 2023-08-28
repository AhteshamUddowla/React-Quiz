import classes from "../Styles/Videos.module.css";
import Video from "./Video";

function Videos() {
  return (
    <div className={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

export default Videos;
