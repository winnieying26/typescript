/*
React hook = special function that allows functional components to use 
React features without writing class componnets(React v16.8)
(useState, useEffect, useContext, useReducer, useCallback )

useState() => allows the creation of a stateful variable and
 a setter function to update its value in the Virtul DOM
 const [name, setName] = useState(initialState)
*/

import React, { useState } from "react";

const Counter = () => {
  const [inputText, setInputText] = useState("");
  const [name, setName] = useState("");

  const updateName = () => {
    setName(inputText);
  };

  return (
    <div className="name">
      <h1>Name: {name}</h1>
      <input
        placeholder="Enter Your name"
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />

      <button onClick={updateName}>Update</button>
    </div>
  );
};

export default Counter;
