import React from "react";
import "./FilterForm.css";

const FilterFrom = ({ filters, setFilters }) => {
  return (
    <div className="filter_block">
      <h1>Фильтрация по:</h1>
      <label htmlFor="filterName">Имени: </label>
      <input
        id="filterName"
        className="filterInp"
        type="text"
        value={filters.name}
        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
      />
      <label htmlFor="filterEmail">Почте: </label>

      <input
        id="filterEmail"
        className="filterInp"
        type="text"
        value={filters.email}
        onChange={(e) => setFilters({ ...filters, email: e.target.value })}
      />
      <label htmlFor="filterPhone">Номеру телефона:</label>

      <input
        id="filterPhone"
        className="filterInp"
        type="text"
        value={filters.phoneNumber}
        onChange={(e) =>
          setFilters({ ...filters, phoneNumber: e.target.value })
        }
      />
    </div>
  );
};

export default FilterFrom;
