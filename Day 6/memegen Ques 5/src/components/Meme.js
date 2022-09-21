import React from "react";
import "../data/memesData";
import memesData from "../data/memesData";

function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top Text"
        ></input>
        <input
          type="text"
          className="form--input"
          placeholder="Bottom Text"
        ></input>
        <button type="Submit" className="form--button" onClick={getMemeImage}>
          Get a new Meme Image &#127750;{" "}
        </button>
      </div>
    </main>
  );
}
export default Meme;
