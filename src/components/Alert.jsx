// Start coding here

function Alert(props) {
  let bgColor;
  let message;
  let icon;
  switch (props.type) {
    case "errorAlert":
      bgColor = "#F9C8C8";
      message = "This is error alert box";
      icon = "/src/assets/frown.svg";
      break;
    case "warningAlert":
      bgColor = "#F9D9C8";
      message = "This is warning alert box";
      icon = "/src/assets/alert-triangle.svg";
      break;
    case "infoAlert":
      bgColor = "#F9EBC8";
      message = "This is info alert box";
      icon = "/src/assets/alert-circle.svg";
      break;
    case "successAlert":
      bgColor = "#CEF7CD";
      message = "This is success alert box";
      icon = "/src/assets/check-circle.svg";
      break;
    default:
      bgColor = "gray";
      message = "Undefined";
      break;
  }
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "76px",
        width: "650px",
        borderRadius: "10px",
        paddingLeft: "30px",
        display: "flex",
        alignItems: "center",
        margin: "15px 0px",
        color: "black",
      }}
    >
      <img
        src={icon}
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "15px",
        }}
      />
      <span>{message}</span>
    </div>
  );
}
export default Alert;
