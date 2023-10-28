
import { useReducer } from "react";
const useFilter=()=>{
    const filterReducer = (state, action) => {
let stateCopy;
        switch (action.type) {
            case "TYPE":
                const typeIndex= state.type.findIndex(filter => filter === action.payload);
                stateCopy = structuredClone(state)
                if(typeIndex !==-1){
                    stateCopy.type.splice(typeIndex, 1);
                    return stateCopy;
                }else{
                    stateCopy.type.push(action.payload);
                    return stateCopy;
                };
            case "BRAND":
                const brandIndex= state.brand.findIndex(filter => filter === action.payload);
                stateCopy = structuredClone(state)
                if(brandIndex!==-1){
                    stateCopy.brand.splice(brandIndex, 1);
                    return stateCopy;
                }else{
                    stateCopy.brand.push(action.payload);
                    return stateCopy;
                };
                case "UP-TO":
                    stateCopy = structuredClone(state);
                    stateCopy.priceRange.upTo=parseInt(action.payload);
                    return stateCopy;
                case "FROM":
                    stateCopy = structuredClone(state);
                    stateCopy.priceRange.from=parseInt(action.payload);
                    return stateCopy;
                case "SEARCH":
                    stateCopy = structuredClone(state);
                    stateCopy.search=action.payload;
                    return stateCopy;

          default:
            return state;
        }
      };



const initialState = {type:[],brand:[],priceRange:{upTo:0,from:0},search:""}
const [filters, dispatchFilters] = useReducer(filterReducer, initialState);

const setType = types=>{
    dispatchFilters({type:"TYPE",payload:types})
}
const setBrand = brand=>{
    dispatchFilters({type:"BRAND",payload:brand})
}
const setUpTo = amount=>{
    dispatchFilters({type:"UP-TO",payload:amount})
}
const setFrom = amount=>{
    dispatchFilters({type:"FROM",payload:amount})
}
const setSearch = amount=>{
    dispatchFilters({type:"SEARCH",payload:amount})
}
return [filters,setType,setBrand,setUpTo,setFrom,setSearch]

    }
    export default useFilter