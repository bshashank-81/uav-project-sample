import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/login";
import LandingPage from "./components/pages/landingPage";
import HomePage from "./components/pages/homePage";

const App = () => {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={HomePage} />
    </Router>
  );
};

export default App;
