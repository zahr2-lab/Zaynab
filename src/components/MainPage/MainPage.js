import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import { langState } from "../Switch/Switch";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const english = [
  { name: "Numbers", emoji: "🔢", page: "Numbers" },
  { name: "Alphabets", emoji: "🔡", page: "Alphabets" },
  { name: "Comming Soon", emoji: "🔥", page: "Alphabets" }
];

const arabic = [
  { name: "الأرقام", emoji: "🔢", page: "Numbers" },
  { name: "الحروف", emoji: "🔡", page: "Abjadia" }
];

export default () => {
  const lang = useRecoilValue(langState);
  const [pages, setPages] = useState(english);
  useEffect(() => {
    !lang ? setPages(arabic) : setPages(english);
  }, [lang]);
  return (
    <>
      <TopBar />
      <div className="list">
        {pages.map((obj, index) => {
          return (
            <Link key={index} className="listItem" to={`/Page/${obj.page}`}>
              <div className="listItem-icon">{obj.emoji}</div>
              <div className="listItem-title">{obj.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
