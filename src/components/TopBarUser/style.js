import styled from "styled-components";

export const _ = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  & > p {
    margin-right: 10px;
  }

  & svg {
    fill: #3e6bec;
  }

  & svg:nth-child(1) {
    margin-right: 10px;
  }
`;
