import styled, { css, keyframes } from "styled-components";

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
from {
  transform: rotate(0deg)
}
to{
  transform: rotate(360deg)
}
`;
export const ButtonSubmit = styled.button.attrs(props => ({
  type: "submit",
  disabled: props.loading
}))`
  padding: 0 15px;
  background: #26c6da;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding: 0px;
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    & + li {
      border-top: 1px #eee solid;
    }
  }
  a {
    text-decoration: none;
    color: #26c6da;
  }
`;
