// Start coding here

function Button(props) {
  let color;
  switch (props.type) {
    case "Primary":
      color = "#074EE8";
      break;
    case "Secondary":
      color = "#07A4E8";
      break;
    case "Error":
      color = "#DE5753";
      break;
    case "Success":
      color = "#26B795";
      break;
    default:
      color = "gray";
      break;
  }
  return (
    <button
      style={{
        backgroundColor: color,
        height: "50px",
        width: "172px",
        padding: "0px 16px",
        borderRadius: "4px",
        gab: "8px",
      }}
    >
      Button
    </button>
  );
}
export default Button;
