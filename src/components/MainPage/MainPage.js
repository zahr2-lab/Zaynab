import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import { langState } from "../Switch/Switch";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import TopBar from "../TopBar/TopBar";

const english = [
  { name: "Numbers", emoji: "🔢", page: "Numbers" },
  { name: "Alphabets", emoji: "🔡", page: "Alphabets" },
  { name: "Colors", emoji: "🎨", page: "Colors" },
  { name: "Shapes", emoji: "🌟", page: "Shapes" },
  { name: "Comming Soon", emoji: "🔥", page: "Comming Soon" }
];

const arabic = [
  { name: "الأرقام", emoji: "🔢", page: "ArabicNums" },
  { name: "الحروف", emoji: "🔡", page: "Abjadia" },
  { name: "الألوان", emoji: "🎨", page: "Colors" },
  { name: "الأشكال", emoji: "🌟", page: "Shapes" },
  { name: "قريباً", emoji: "🔥", page: "Comming Soon" }
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
      <img className="dave" src="/img/Ava1.png" alt="" />

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
