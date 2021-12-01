import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      icon: css`
        & > svg {
          height: 14px;
          width: 14px;

          & > path {
            fill: #6b8068;
          }
        }
      `,
    }[props.attr])}
`;

export const Header = styled.p``;
