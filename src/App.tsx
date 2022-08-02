import React from "react";
import { useEffect } from "react";
import SearchPage from "./Containers/SearchPage/searchPage";
import NavBar from "./Components/Navigation/NavBar";
import SettingsPage from "./Containers/SettingsPage/settingsPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/settings" component={SettingsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
