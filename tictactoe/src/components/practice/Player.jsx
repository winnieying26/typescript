import React, { useState } from "react";

const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  function handleChange(e) {
    setPlayerName(e.target.value);
  }
  let editPlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = "Edit"
  if (isEditing) {
    editPlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    //btnCaption("Save")
  }
  {
    return (
      <li>
        <span className="player">
          {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    );
  }
};

export default Player;
