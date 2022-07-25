import React from "react";
import SearchPage from "./Components/SearchPage/searchPage";
import NavBar from "./Components/Navigation/NavBar";
import SettingsPage from "./Components/SettingsPage/settingsPage";
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
