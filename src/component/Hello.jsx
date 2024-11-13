import React from "react";
import styles from "./Hello.module.css";
const Hello = () => {
  function ShowName() {
    console.log("Mike");
  }

  function Change(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <h1>Hello!</h1>
      <button onClick={ShowName}>ShowName</button>
      <button onClick={() => console.log(30)}>Showage</button>
      <input onChange={Change}></input>
    </div>
  );
};

export default Hello;
