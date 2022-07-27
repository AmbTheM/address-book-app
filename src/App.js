import React from "react";
import { useEffect } from "react";
import SearchPage from "./Containers/SearchPage/searchPage";
import NavBar from "./Components/Navigation/NavBar";
import SettingsPage from "./Containers/SettingsPage/settingsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </Router>
  );
}

export default App;
