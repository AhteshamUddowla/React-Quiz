// eslint-disable-next-line react/prop-types
function CheckBox({ text, ...rest }) {
  return (
    <label>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
