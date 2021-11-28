import styled, { css } from "styled-components";

export const Table = styled.table`
  text-align: left;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  font-size: 14px;
  font-weight: normal;
`;

export const TBody = styled.tbody``;

export const Trow = styled.tr`
  height: 50px;
`;

export const Thead = styled.th`
  padding-left: 20px;
  background-color: #3e6bec;
  color: white;
  position: sticky;
  z-index: 100;
  top: 0;
`;

export const Tdetail = styled.td`
  padding-left: 20px;
  background-color: white;
  border-bottom: 1px solid rgba(116, 19, 148, 0.25);
`;
