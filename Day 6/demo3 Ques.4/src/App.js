import React from "react";
import "./style.css";

export default function App() {
  function HandleClick() {
    console.log("I was Clicked "); //It will be logged, inside console after click me
  }

  function MouseHover() {
    console.log("Mouse Hovers");
  }
  return (
    <div className="container">
      <img
        className="image"
        src="https://picsum.photos/640/360"
        alt="SkyScraper"
        onMouseMove={MouseHover}
      />
      <button className="click-button" onClick={HandleClick}>
        Click me
      </button>
    </div>
  );
}
