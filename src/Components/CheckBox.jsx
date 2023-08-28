// eslint-disable-next-line react/prop-types
function CheckBox({ className, text, ...rest }) {
  return (
    <label className={className}>
      <input type="checkbox" {...rest} />
      <span>{text}</span>
    </label>
  );
}

export default CheckBox;
