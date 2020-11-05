import React from "react";
import "./styles.scss";
import MainPage from "./components/MainPage/MainPage";
import { langState } from "./components/Switch/Switch";
import { useRecoilValue } from "recoil";
import Page from "./components/Page/Page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const lang = useRecoilValue(langState);

  return (
    <div className={`container ${!lang && "rtl"}`}>
      <Router>
        <Switch>
          <Route path="/Page/:page" children={<Page />} />
          <Route path="" children={<MainPage />} />
        </Switch>
      </Router>
    </div>
  );
}
