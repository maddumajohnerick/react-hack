import React from "react";
import "../App.sass";

export default function App(props) {
  return (
    <>
      <div>Header</div>
      <div className="section">
        <div className="container">{props.children}</div>
      </div>
    </>
  );
}
