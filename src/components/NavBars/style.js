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

export const Input = styled.input`
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
