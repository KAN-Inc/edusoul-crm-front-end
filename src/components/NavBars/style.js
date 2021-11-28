import styled from "styled-components";

export const _ = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  & > div {
    display: flex;
    gap: 50px;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: lighter;
`;
