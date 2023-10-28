import React from 'react';
import Brand from './brandFilter';
import { useContext } from 'react';
import FilterContext from '../../FIlterContext';

const FilterBrand = () => {
  const ctx = useContext(FilterContext)
  const {brands}=ctx
  return (
    <ul className="wine_filters" id="brandFilter">
      <li>Elegi tu marca favorita</li>
      {brands.map((brand) => (
        <Brand brand={brand} key={brand}  />
      ))}
    </ul>
  );
};

export default FilterBrand;
