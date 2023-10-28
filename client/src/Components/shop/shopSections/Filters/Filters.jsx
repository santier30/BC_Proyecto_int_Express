
import React from 'react';
import FilterCategory from './FilterUl.js/FilterCategory';
import FilterBrand from './FilterUl.js/FilterBrand/FilterBrand';
import FilterPriceRange from './FilterUl.js/filterPriceRange';


const Filters = () => {
  


  return (
    <div>
      <FilterCategory />
      <FilterBrand  />
      <FilterPriceRange  />
    </div>
  );
};

export default Filters;
