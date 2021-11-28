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
