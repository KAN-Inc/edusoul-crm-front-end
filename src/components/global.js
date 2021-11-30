import styled from "styled-components";

export const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 25px;
  background: #f7f7f7;
  border-radius: 10px;
  color: #14274e;
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: ${(props) => props.gap}px;
`;

export const Flexbox = styled.div`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : "none")};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;
  color: #14274e;
  background: #f7f7f7;
  height: 25px;
  padding: 5px 15px;
  min-width: 200px;
  &::placeholder {
    color: #909090;
  }
`;

export const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 10px;
  color: #14274e;
  background: #f7f7f7;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  height: 35px;
  padding: 5px 15px;
  min-width: 200px;
  &::placeholder {
    color: #909090;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  background: #3e6bec;
  padding: 5px 25px;
  font-size: 18px;
  &:hover {
    cursor: pointer;
  }
`;
