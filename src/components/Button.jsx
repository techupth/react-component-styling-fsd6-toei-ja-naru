// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  // let bgColor = "#074EE8";
  if (props.type === "primary") {
    return (
      <button
        css={css`
          background-color: #074ee8;
          font-size: 16px;
          color: white;
          height: 50px;
          width: 172px;
          padding: 0px, px, 0px, 16px;
          radius: 4px;
          display: block;
          margin: 20px;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        Button
      </button>
    );
  } else if (props.type === "secondary") {
    return (
      <button
        css={css`
          background-color: #07a4e8;
          font-size: 16px;
          color: white;
          height: 50px;
          width: 172px;
          padding: 0px, px, 0px, 16px;
          radius: 4px;
          display: block;
          margin: 20px;
          margin-left: auto;
          margin-right: auto;
        `}
      >
        Button
      </button>
    );
  }
}

// return (
//   <button
//     css={css`
//       background-color: ${bgColor};
//       font-size: 16px;
//       color: white;
//       height: 50px;
//       width: 172px;
//       padding: 0px, px, 0px, 16px;
//       radius: 4px;
//       display: block;
//       margin: 20px;
//     `}
//   >
//     Button
//   </button>
// );
// }

export default Button;
