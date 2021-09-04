import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        display: flex;
      `,
      rightSide: css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        & > img {
          width: 500px;
          height: 500px;
        }
      `,
      leftSide: css`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 500px;
        background-color: #c2d7f2;
      `,
    }[props.attr])}
`;
