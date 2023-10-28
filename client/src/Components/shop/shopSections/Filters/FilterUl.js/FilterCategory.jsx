import React from 'react';
import { useContext } from 'react';
import FilterContext from '../FIlterContext';

const FilterCategory = () => {
  const ctx = useContext(FilterContext)
  const categories = ['Tinto',"Cabernet Sauvignon", 'Espumante', 'Rosé', 'Blanco', 'Otros'];
  const {setType } = ctx;
  return (
    <ul className="wine_filters">
      <li>Elegi tu tipo favorito</li>
      {categories.map((category) => (
        <li key={category}>
          <input
            type="checkbox"
            id={category.toLowerCase()}
            className="wine-category"
            onChange={() => setType(category)}
            value={category}
          />
          <label htmlFor={category.toLowerCase()}>{category}</label>
        </li>
      ))}
    </ul>
  );
};

export default FilterCategory;
