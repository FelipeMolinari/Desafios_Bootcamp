import styled from "styled-components";
import { darken } from "polished";
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    img {
      align-self: center;
      max-width: 240px;
    }

    > strong {
      font-size: 16px;
      color: #333;
      line-height: 20px;
      margin-top: 5px;
    }
    > span {
      font-size: 20px;
      font-weight: bold;
      margin: 5px 0px 20px;
    }
    button {
      background: #cc2981;
      border: none;
      margin-top: auto;
      border-radius: 4px;
      display: flex;
      align-items: center;
      color: #fff;
      overflow: hidden;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, "#cc2981")};
      }
      div {
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }
      span {
        text-align: center;
        font-weight: bold;
        flex: 1;
      }
    }
  }
`;
