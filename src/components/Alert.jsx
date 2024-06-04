/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MyImage1 from "./My-image/frown.svg";
import MyImage2 from "./My-image/alert-triangle.svg";
import MyImage3 from "./My-image/alert-circle.svg";
import MyImage4 from "./My-image/check-circle.svg";

function Alert(prop) {
  if (prop.alert === "Error") {
    return (
      <div
        className="error-alert"
        css={css`
          display: flex;
          align-items: center;
          gap: 16px;
          width: 650px;
          height: 76px;
          margin: 0;
          padding-left: 16px;
          border-radius: 10px;
          background-color: #f9c8c8;
          color: #444444;
        `}
      >
        <img src={MyImage1} alt="frown" width={24} height={24} />
        <p
          css={css`
            color: #444444;
            font-weight: 700;
          `}
        >
          This is error alert box
        </p>
      </div>
    );
  } else if (prop.alert === "Warning") {
    return (
      <div
        className="error-alert"
        css={css`
          display: flex;
          align-items: center;
          gap: 16px;
          width: 650px;
          height: 76px;
          margin: 0;
          padding-left: 16px;
          border-radius: 10px;
          background: #f9d9c8;
          color: #444444;
        `}
      >
        <img src={MyImage2} alt="alert-triangle" width={24} height={24} />
        <p
          css={css`
            color: #444444;
            font-weight: 700;
          `}
        >
          This is warning alert box
        </p>
      </div>
    );
  } else if (prop.alert === "Info") {
    return (
      <div
        className="error-alert"
        css={css`
          display: flex;
          align-items: center;
          gap: 16px;
          width: 650px;
          height: 76px;
          margin: 0;
          padding-left: 16px;
          border-radius: 10px;
          background: #f9ebc8;
          color: #444444;
        `}
      >
        <img src={MyImage3} alt="alert-circle" width={24} height={24} />
        <p
          css={css`
            color: #444444;
            font-weight: 700;
          `}
        >
          This is info alert box
        </p>
      </div>
    );
  } else if (prop.alert === "Success") {
    return (
      <div
        className="error-alert"
        css={css`
          display: flex;
          align-items: center;
          gap: 16px;
          width: 650px;
          height: 76px;
          margin: 0;
          padding-left: 16px;
          border-radius: 10px;
          background: #cef7cd;
          color: #444444;
        `}
      >
        <img src={MyImage4} alt="check-circle" width={24} height={24} />
        <p
          css={css`
            color: #444444;
            font-weight: 700;
          `}
        >
          This is success alert box
        </p>
      </div>
    );
  }
}
export default Alert;
