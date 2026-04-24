import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <input
      placeholder="Buscar..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        width: "100%",
        padding: 10,
        borderRadius: 8,
        margin: "20px 0",
      }}
    />
  );
};

export default SearchBar;