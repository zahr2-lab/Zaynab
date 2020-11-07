import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { content } from "./pageContent.js";
import Item from "../Item/Item";
import Greating from "../Greating/Greating";
import "./Page.scss";

export default () => {
  let { page } = useParams();
  const [pageContent, setPageContent] = useState([]);
  useEffect(() => {
    setPageContent(
      content.filter((obj) => {
        return obj.page === page;
      })
    );
  }, []);
  return (
    <>
      <div className="greating">
        <Greating />
      </div>
      <img className="dave" src="/img/Dave-Ava.png" alt="" />
      <div className="items">
        {pageContent.map((obj, index) => {
          return (
            <Item
              key={index}
              page={obj.page}
              name={obj.name}
              emoji={obj.emoji}
              filename={obj.filename}
            />
          );
        })}
      </div>
    </>
  );
};
