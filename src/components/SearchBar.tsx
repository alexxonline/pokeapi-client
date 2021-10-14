import React, { useState, useEffect } from "react";
export default function SearchBar({
  emitSearch,
}: {
  emitSearch: (filter: string) => void;
}) {
  useEffect(() => {
    document.getElementById("input-search")?.focus();
  }, []);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const handleSearch = () => {
    emitSearch(filter);
  };

  return (
    <form className="form-inline">
      <input
        id="input-search"
        type="text"
        className="form-control input-search"
        placeholder="Ingrese el nombre a buscar"
        value={filter}
        onChange={handleFilterChange}
      />
      <button type="button" className="btn btn-primary" onClick={handleSearch}>
        Buscar
      </button>
    </form>
  );
}
