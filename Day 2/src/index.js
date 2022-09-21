import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Main from "./components/maincomponent";
import "./components/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Main />
    <Footer />
  </React.StrictMode>
);
