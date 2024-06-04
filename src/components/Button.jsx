/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(prop) {
  if (prop.text === "Primary") {
    return (
      <section
        css={css`
          width: 331px;
          height: 50px;
          margin: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
        `}
      >
        <p>Primary</p>
        <button
          css={css`
            width: 171px;
            height: 50px;
            border-radius: 4px;
            background-color: #074ee8;
            font-size: 16px;
          `}
        >
          Button
        </button>
      </section>
    );
  } else if (prop.text === "Secondary") {
    return (
      <section
        css={css`
          width: 331px;
          height: 50px;
          margin: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
        `}
      >
        <p>Secondary</p>
        <button
          css={css`
            width: 171px;
            height: 50px;
            border-radius: 4px;
            background-color: #07a4e8;
            font-size: 16px;
          `}
        >
          Button
        </button>
      </section>
    );
  }
}

export default Button;
