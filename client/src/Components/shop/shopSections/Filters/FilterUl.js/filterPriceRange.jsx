import React from 'react';
import { useContext } from 'react';
import FilterContext from '../FIlterContext';

const FilterPriceRange = () => {
  const ctx = useContext(FilterContext)
  const { setFrom, setUpTo, filters, biggestPrice } =ctx
  return (
    <ul className="wine_filters">
      <li>
        <label htmlFor="price-range">Rango de precio:</label>
      </li>
      <li>Desde</li>
      <li>
        <input
          type="range"
          id="price-range-min"
          min="0"
          max={Math.floor(biggestPrice.current) + 1}
          step="1"
          onChange={(event) => setFrom(event.target.value)}
        />
      </li>
      <li id="price-value-min">${filters.priceRange.from}</li>
      <li>Hasta</li>
      <li>
        <input
          type="range"
          id="price-range-max"
          min="0"
          max={Math.floor(biggestPrice.current) + 1}
          step="1"
          onChange={(event) => setUpTo(event.target.value)}
        />
      </li>
      <li id="price-value-max">${filters.priceRange.upTo}</li>
    </ul>
  );
};

export default FilterPriceRange;
