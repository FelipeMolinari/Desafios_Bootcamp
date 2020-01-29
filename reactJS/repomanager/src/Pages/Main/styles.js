import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  padding: 30px;
  margin: 80px auto;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 10px;
    }
  }
`;

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

export const ButtonSubmit = styled.button.attrs({
  type: "submit"
})`
  padding: 0 15px;
  background: #26c6da;
  border: 0;
  display: flex;
  align-items: center;
  border-radius: 4px;
  margin-left: 10px;
`;
