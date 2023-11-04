
import React, { useState } from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  transition: background-color 0.3s;
`;

const FilterSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function Filters({ categories, onFilterChange, onSortChange }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('PriceLowToHigh');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange(e.target.value);
  };

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <FiltersContainer>
      <div>
        <label>Filter by Category:</label>
        <FilterSelect onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </FilterSelect>
      </div>
      <div>
        <label>Sort by Price:</label>
        <FilterSelect onChange={handleSortChange} value={selectedSort}>
          <option value="PriceLowToHigh">Low to High</option>
          <option value="PriceHighToLow">High to Low</option>
        </FilterSelect>
      </div>
    </FiltersContainer>
  );
}

export default Filters;
