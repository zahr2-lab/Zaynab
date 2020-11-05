import React from "react";
import "./Switch.scss";
import { atom, useRecoilState } from "recoil";

export const langState = atom({
  key: "lang",

  default: true
});

export default () => {
  const [lang, setLang] = useRecoilState(langState);

  return (
    <div className="switch" onClick={() => setLang(!lang)}>
      {lang ? (
        <div className="switch-lang">العربية</div>
      ) : (
        <div className="switch-lang">English</div>
      )}
      <div className="switch-btn"></div>
    </div>
  );
};
