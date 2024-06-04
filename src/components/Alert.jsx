// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert(props) {
  return (
    <div
      css={css`
        display: flex;
        width: 650px;
        height: auto;
        font-size: 13px;
        color: #444444;
        background-color: ${props.bgColor};
        padding: 7px 30px;
        gap: 18px;
        align-item: center;
        border-radius: 10px;
        margin: 30px;
      `}
    >
      <img
        src={props.icon}
        alt={props.alt}
        css={css`
          width: 24px;
          height: 24px;
          align-self: center;
        `}
      />
      <h2>{props.text}</h2>
    </div>
  );
}

export default Alert;
