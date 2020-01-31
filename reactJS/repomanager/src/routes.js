import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./Pages/Main/main";
import Repository from "./Pages/Repository/repository";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
