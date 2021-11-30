import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const CardTitle = styled.div`
  border-radius: 10px 10px 0 0;
  background: #3e6bec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  height: 45px;
  border-bottom: 1px solid #3e6bec;
`;

export const CardBadge = styled.div`
    display: flex;
    height: 100%;
    border-top-right-radius: 10px;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    background: #fff;
    border-left: 1px solid #406cec;
    color: #406CEC;
    &:hover {
        background #3e6bec;
        color: #fff;
        cursor: pointer;
        border-left: 1px solid #fff;
        }
    }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 175px;
  padding: 10px;
`;

export const CardFooter = styled.div`
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
