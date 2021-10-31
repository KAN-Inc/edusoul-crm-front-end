import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        display: flex;
      `,
      center: css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
      `,
      content: css`
        flex: 1;
        padding: 30px;
        background-color: #f7f7f7;

        & > div {
          height: 100%;
          width: 100%;
          background-color: #3e6bec;
        }
      `,
    }[props.attr])}
`;
