import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  svg {
    color: #fff;
    transition: color 0.2s;

    :hover {
      color: #e52e91;
    }
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      color: #fff;
      display: block;
    }
    span {
      color: #999;
      font-size: 12px;
    }
  }
`;
