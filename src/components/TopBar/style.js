import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        display: flex;
        justify-content: flex-end;
        height: 60px;
        border-bottom: 1px solid #cecece;
        background-color: #f7f7f7;
      `,
    }[props.attr])}
`;
