import styled from "styled-components";

export const _ = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 30px;
  border: 1px solid #3e6bec;
  border-radius: 5px;
  padding-left: 10px;
  background-color: white;
  transition: all 0.5s ease-out;

  & > svg {
    fill: #3e6bec;
  }

  & > input:focus {
    background-color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Search = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 30px;
  margin-left: 10px;
  padding-left: 10px;
`;
