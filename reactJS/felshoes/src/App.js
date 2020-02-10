import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./Styles/global";
import Routes from "./routes";

import Header from "./Components/Header";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
