import React from "react";
import "./TopBar.scss";
import Lang from "../Switch/Switch";
import Greating from "../Greating/Greating";

export default () => {
  return (
    <div className="topBar">
      <Greating />
      <Lang />
    </div>
  );
};
