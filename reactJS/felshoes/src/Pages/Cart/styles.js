import styled from "styled-components";
import { darken } from "polished";
export const Container = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;

  footer {
    margin-top: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #cc2981;
      border: none;
      border-radius: 4px;

      color: #fff;
      text-transform: uppercase;
      padding: 12px 20px;
      font-weight: bold;
      overflow: hidden;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#cc2981")};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    padding: 12px;
    text-align: left;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    max-width: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    font-weight: bold;
    margin-top: 5px;
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #eee;
      width: 50px;
      border-radius: 4px;
      color: #666;
      padding: 6px;
    }
  }
  button {
    background: none;
    border: none;
    padding: 6px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  color: #999;
  strong {
    color: #333;
    font-size: 28px;
    font-weight: bold;
    margin-left: 5px;
  }
`;
