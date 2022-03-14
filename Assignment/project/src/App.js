import React from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Card from "./component/Card";
import Menu from "./component/Menu";
import Juice from "./component/SubMenu/Juice";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Card />
        <Router>
          <Route path="/menu" component={Menu} />
          <Route path="/juice" component={Juice} />
        </Router>
    </BrowserRouter>
  );
}

export default App;
