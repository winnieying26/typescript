import React, { useEffect, useState } from "react";

const Checkbox = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectItem1, setSelectItem1] = useState(false);
  const [selectItem2, setSelectItem2] = useState(false);
  const [selectItem3, setSelectItem3] = useState(false);

  const handleSelectAll = () => {
    const newValue = !selectAll;
    setSelectAll(newValue);
    setSelectItem1(newValue);
    setSelectItem2(newValue);
    setSelectItem3(newValue);
  };

  useEffect(() => {
    if (selectItem1 && selectItem2 && selectItem3) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectItem1, selectItem2, selectItem3]);

  return (
    <div>
      <h1>All the selected Items:</h1>
      <h2>item1, item2, item3</h2>
      <label>
        <input
          type="checkbox"
          checked={selectAll}
          onChange={(e) => setSelectAll(handleSelectAll)}
          style={{fontSize: "25px", marginBottom: "10px"}}
        />
        SelectAll
      </label>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize:"20px" }}>
        <label>
          <input
            type="checkbox"
            checked={selectItem1}
            onChange={(e) => setSelectItem1(e.target.checked)}
          />
          item1
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectItem2}
            onChange={(e) => setSelectItem2(e.target.checked)}
          />
          item2
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectItem3}
            onChange={(e) => setSelectItem3(e.target.checked)}
          />
          item3
        </label>
      </div>
    </div>
  );
};

export default Checkbox;

{/**/ }