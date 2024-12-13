import React, { useContext } from "react";
import C from "./C";
import { UserContext } from "./A";

const B = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component B</h1>
      <h2>{`Hello Again! ${user}`}</h2>
      <C />
    </div>
  );
};

export default B;
