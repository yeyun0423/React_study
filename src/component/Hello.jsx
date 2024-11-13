import React from "react";
import styles from "./Hello.module.css";
const Hello = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <div className={styles.box}>ok</div>
    </div>
  );
};

export default Hello;
