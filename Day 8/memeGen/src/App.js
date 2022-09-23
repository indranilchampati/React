import React from "react";
import Header from "./components/Header";
import MemeGenerator from "./components/Meme";
import "../src/style.css";

/**
 * Challenge: Build the Header component
 */
export default function App() {
  return (
    <div>
      <Header />
      <MemeGenerator />
    </div>
  );
}
