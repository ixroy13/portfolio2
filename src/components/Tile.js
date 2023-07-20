import React from "react";

export default function Tile(props) {
  return (
    <div>
      <p>{props.title}</p>
      <h2>{props.value}</h2>
    </div>
  );
}
