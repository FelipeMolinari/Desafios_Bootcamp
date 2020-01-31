import styled from "styled-components";

export const Content = styled.header`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    border-radius: 50%;
    display: flex;
  }
  h1 {
    font-size: 24px;
    margin-top: 10px;
  }
  p {
    margin-top: 15px;
    max-width: 400px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
    color: #26c6da;
    margin-bottom: 16px;
  }
`;

export const Loading = styled.h1`
  color: #fff;
  font-size: 34px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const IssueList = styled.ul`
  padding: 0;
  li {
    border: 1px #eee solid;
    padding: 16px;
    border-radius: 6px;
    list-style: none;
    display: flex;
    margin: 16px 0px 0px 0px;
    img {
      border-radius: 50%;
      width: 46px;
    }
    div {
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      strong {
        a {
          &:hover {
            color: #26c6da;
          }
          color: #333;
          text-decoration: none;
          font-size: 12px;
        }
        span {
          margin-left: 5px;
          color: #333;
          font-size: 10px;
          background: #eee;
          padding: 5px 3px;
          border-radius: 3px;
        }
      }
      p {
        color: #999;
        font-size: 14px;
      }
    }
  }
`;
