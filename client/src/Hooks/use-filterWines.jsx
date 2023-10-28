import {  useCallback } from 'react';

function useFilterWines( filters , setFilteredWines) {
 

  const filterWinesHandler = useCallback(() => {
   

    const { type, brand, priceRange, search } = filters;
    const queryParams = [];
    if (type[0]) {queryParams.push(`type=${type}`)};
    if (brand[0]) {queryParams.push(`brand=${brand}`)};
    if (priceRange) {
      if (priceRange.from !== 0) queryParams.push(`priceRangeFrom=${priceRange.from}`);
      if (priceRange.upTo !== 0) queryParams.push(`priceRangeUpTo=${priceRange.upTo}`);
    }
    if (search!== "") queryParams.push(`search=${search}`);
    
    const queryString = queryParams.join('&');

      fetch(`/Vintus/Products/Filter?${queryString}`)
          .then((response) =>  response.json())
          .then((data) => {
            setFilteredWines(data);
  
          })
          .catch((error) => {
            console.error("Error fetching wine data:", error);
          });


  }, [filters,setFilteredWines]);



  return filterWinesHandler;
}

export default useFilterWines;
