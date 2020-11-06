import React from "react";
import { langState } from "../Switch/Switch";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

export default () => {
  const lang = useRecoilValue(langState);

  return (
    <Link to="/">
      {!lang ? (
        <h1>
          مرحبا <name>زينب</name> 🐣
        </h1>
      ) : (
        <h1>
          Hi <name>Zaynab</name> 🐣
        </h1>
      )}
    </Link>
  );
};
