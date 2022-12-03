/**
 * React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.
*/
import React, { useState } from "react";

const BuildSearchFilterReact = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const listData = [
    "Apple",
    "Banana",
    "Lemon",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon",
  ];

  const handleChange = (e) => {
    const searchParam = e.target.value;
    setSearch(searchParam);
    if (!searchParam){
        setList([]);
        return;
    }
    const filterList = listData.filter(
      (fruit) => fruit.toLowerCase().indexOf(searchParam?.toLowerCase()) !== -1
    );
    setList(filterList);
  };

  return (
    <div>
      <label>
        Search:
        <input
          type="text"
          id="search"
          placeholder="Search for..."
          value={search}
          onChange={handleChange}
        />
      </label>
      <div>
        {list?.map((fruit, i) => (
          <div key={i}>{fruit}</div>
        ))}
      </div>
    </div>
  );
};

export default BuildSearchFilterReact;