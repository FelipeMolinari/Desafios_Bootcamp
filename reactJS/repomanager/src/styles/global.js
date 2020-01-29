import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:8;
  outline:0;
  box-sizing:border-box
}

html, body, #root{
  min-height:100%
}

body{
  background: #26c6da
;
  -webkit-font-smoothing: antialiased !important;
}

body, input, button{
  color: #222;
  font-size:14px;
  font-family:Arial, Helvetica, sans-serif;
}
`;
