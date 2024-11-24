import React, { useState } from "react";
import styles from "./Hello.module.css";
import UserName from "./UserName";

const Hello = ({ age }) => {
  const [name, setName] = useState("Mike");
  const msg = age > 19 ? "성인" : "미성년자";

  return (
    <div>
      <h2 id="name">
        {name}({age}):{msg}
      </h2>
      <UserName name={name} />
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        change
      </button>
    </div>
  );
};

export default Hello;
