import React from "react";
import ReactSearchBox from "react-search-box";

const SearchBar = () => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  const handleSearch = (record) => {
    console.log(record);
  };

  return (
    <ReactSearchBox
      placeholder="Placeholder"
      value="Doe"
      data={data}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
