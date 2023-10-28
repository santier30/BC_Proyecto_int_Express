
import { useContext } from 'react';
import FilterContext from '../../FIlterContext';
const Brand = ({ brand }) => {
  const ctx = useContext(FilterContext)
 const {setBrand} = ctx
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  return (
    <li>
      <input
        type="checkbox"
        id={brand}
        className="wine-brand"
        value={brand}
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <label htmlFor={brand}>{capitalizeFirstLetter(brand)}</label>
    </li>
  );
};

export default Brand;