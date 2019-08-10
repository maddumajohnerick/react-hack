import React from "react";

export default function App(props) {
  return (
    <>
      <div>Header</div>
      <div>{props.children}</div>
    </>
  );
}
