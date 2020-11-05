import React from "react";
import { langState } from "../Switch/Switch";
import { useRecoilValue } from "recoil";

export default () => {
  const lang = useRecoilValue(langState);

  return (
    <>
      {!lang ? (
        <h1>
          مرحبا <name>زينب</name> 🐣
        </h1>
      ) : (
        <h1>
          Hi <name>Zaynab</name> 🐣
        </h1>
      )}
    </>
  );
};
