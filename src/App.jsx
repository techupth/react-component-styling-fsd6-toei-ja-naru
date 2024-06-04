import "./App.css";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button text="Primary" />
        <Button text="Secondary" />
      </div>
      <hr />
      <div
        className="alert-components-section"
        css={css`
          display: flex;
          flex-direction: column;
          gap: 32px;
        `}
      >
        <Alert alert="Error" />
        <Alert alert="Warning" />
        <Alert alert="Info" />
        <Alert alert="Success" />
      </div>
    </div>
  );
}

export default App;
