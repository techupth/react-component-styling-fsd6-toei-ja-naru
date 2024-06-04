import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div
        className="button-components-section"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {/* Render ตัว Button 2 แบบ */}
        <Button type="Primary" />
        <Button type="Secondary" />
        <Button type="Error" />
        <Button type="Success" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="errorAlert" />
        <Alert type="warningAlert" />
        <Alert type="infoAlert" />
        <Alert type="successAlert" />
      </div>
    </div>
  );
}

export default App;
