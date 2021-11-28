import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        height: 100vh;
        width: 250px;
        background-color: #f0f0f0;
      `,
      image: css`
        display: flex;
        justify-content: center;

        & > img {
          height: 60px;
        }
      `,
      tabs: css`
        display: flex;
        flex-direction: column;
        gap: 20px;
      `,
    }[props.attr])}
`;
