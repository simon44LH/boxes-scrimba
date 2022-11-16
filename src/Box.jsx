import React from "react";
import "./App.css";

export default function Box(props) {
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };

  return <div style={styles} className="box" onClick={props.toggle}></div>;
}
