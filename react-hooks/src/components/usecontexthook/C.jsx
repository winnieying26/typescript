import React, { useContext } from "react";
import { UserContext } from "./A";
import D from "./D";

const C = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>{`Hello Again! ${user}`}</h2>
      <D />
    </div>
  );
};

export default C;
