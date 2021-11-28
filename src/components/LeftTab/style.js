import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 15px 50px;
        color: white;
        background-color: #3e6bec;

        & > svg {
          fill: white;
        }
      `,
    }[props.attr])}
`;
