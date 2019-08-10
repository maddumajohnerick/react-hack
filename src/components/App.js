import React from "react";
import Header from "./Header";
import "../App.sass";

export default function App(props) {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">{props.children}</div>
      </div>
    </>
  );
}
