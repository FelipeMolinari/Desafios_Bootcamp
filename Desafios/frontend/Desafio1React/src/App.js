import React from "react";
import "./App.css";

import HeaderComponent from "./components/Header/Header";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <>
      <HeaderComponent />
      <PostList />
    </>
  );
}

export default App;
