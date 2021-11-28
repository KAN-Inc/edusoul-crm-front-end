import styled from "styled-components";

export const Button = styled.button`
  padding: 0 16px;
  border: 1px solid #3e6bec;
  border-radius: 10px;
  color: white;
  background-color: #3e6bec;
  font-size: 18px;
  font-weight: lighter;
  transition: all 0.2s ease-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: #3e6bec;
    background-color: white;
  }
`;
