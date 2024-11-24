import React, { useState } from "react";

const Test = () => {
  const [name, setname] = useState();
  const [age, setage] = useState();

  return (
    <div>
      <input type="text" />
      <button>name</button>
      <input type="text" />
      <button>age</button>
    </div>
  );
};

export default Test;
