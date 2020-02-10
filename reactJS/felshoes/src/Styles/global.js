import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro&display=swap');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: 0px
}

body{
  background: #191920;
  -webkit-font-smoothing: antialiased;
}
body button input{
  font: 16px 'Source Sans Pro', sans-serif

}
h1{
  font: 20px 'Roboto', sans-serif;
}

#root{
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}
button{
  cursor: pointer;
}
`;
