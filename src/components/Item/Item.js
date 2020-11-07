import React, { useState } from "react";
import "./Item.scss";

export default ({ name, emoji, page, filename }) => {
  const [emojii, setEmojii] = useState(false);
  let audio = new Audio(`/sounds/${page}/${filename}.m4a`);
  const start = () => {
    !isNaN(audio.duration) && audio.play();

    setEmojii(true);
    setTimeout(() => setEmojii(false), 2200);
  };
  return (
    <div className="item" onClick={start}>
      {emojii ? emoji : name}
    </div>
  );
};
