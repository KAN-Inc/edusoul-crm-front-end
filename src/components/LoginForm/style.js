import styled, { css } from "styled-components";

export const _ = styled.div`
  ${(props) =>
    ({
      main: css`
        display: flex;
        flex-direction: column;
        align-items: center;
      `,
      icon: css`
        margin-bottom: 80px;
      `,
      options: css`
        user-select: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 30px;
        color: #2e3a59;
      `,
      checkbox: css`
        display: flex;
        align-items: center;

        & > * {
          cursor: pointer;
        }
        & > label {
          margin-left: 5px;
        }
      `,
      inputs: css`
        display: flex;
        flex-direction: column;
        gap: 30px;
      `,
      username: css`
        display: flex;
        overflow: hidden;
        height: 40px;
        width: 350px;
        border-radius: 5px;
        background-color: white;
      `,
      password: css`
        display: flex;
        overflow: hidden;
        height: 40px;
        width: 350px;
        border-radius: 5px;
        background-color: white;
      `,
      inputIcon: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        transition: background-color 0.2s;
      `,
    }[props.attr])}

  ${(props) =>
    ({
      asButton: css`
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      `,
    }[props.attr2])}
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  color: white;
  background-color: #576c89;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Checkbox = styled.input``;

export const Label = styled.label``;
