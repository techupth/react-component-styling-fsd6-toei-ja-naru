import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import error from "./components/alert-icons/error.png";
import warning from "./components/alert-icons/warning.png";
import info from "./components/alert-icons/info.png";
import success from "./components/alert-icons/success.png";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert
          alt="Error"
          text="This is error alert box"
          bgColor="#F9C8C8"
          icon={error}
        />
        <Alert
          alt="Warning"
          text="This is warning alert box"
          bgColor="#F9D9C8"
          icon={warning}
        />
        <Alert
          alt="Info"
          text="This is info alert box"
          bgColor="#F9EBC8"
          icon={info}
        />
        <Alert
          alt="Success"
          text="This is success alert box"
          bgColor="#CEF7CD"
          icon={success}
        />
      </div>
    </div>
  );
}

export default App;
