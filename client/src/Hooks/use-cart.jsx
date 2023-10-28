import { useReducer,useEffect } from "react";

const useCart=()=>{
    const cartReducer = (state, action) => {
        switch (action.type) {
          case "ADD_TO_CART":
            const foundIndex = state.findIndex(item => item.Name === action.payload.Name);
            if (foundIndex !== -1) {
              const updatedItem = { ...state[foundIndex], Amount: state[foundIndex].Amount + action.payload.Amount };
              return [...state.slice(0, foundIndex), updatedItem, ...state.slice(foundIndex + 1)];
            } else {
              return [...state, action.payload];
            }
          case "DECREASE_AMOUNT":
            const decreaseIndex = state.findIndex(item => item.Name === action.payload);
            const decreasedItem = { ...state[decreaseIndex], Amount: state[decreaseIndex].Amount - 1 };
            return [...state.slice(0, decreaseIndex), decreasedItem, ...state.slice(decreaseIndex + 1)];
          case "INCREASE_AMOUNT":
            const increaseIndex = state.findIndex(item => item.Name === action.payload);
            const increasedItem = { ...state[increaseIndex], Amount: state[increaseIndex].Amount + 1 };
            return [...state.slice(0, increaseIndex), increasedItem, ...state.slice(increaseIndex + 1)];
          default:
            return state;
        }
      };
      
      const savedCartData = localStorage.getItem("cartItems")

      const initialState = savedCartData ? JSON.parse(savedCartData) : [];
    
      const [cartItems, dispatchCartItems] = useReducer(cartReducer, initialState.filter(item => item.Amount === 0));
      
        const addToCartHandler = (Name, Img, Price , Amount=1) => {
          const Item = { Name: Name, Price: Price, Img: Img, Amount: Amount };
          dispatchCartItems({ type: "ADD_TO_CART", payload: Item });
        };
        
      
        const reduce = Name => {
          dispatchCartItems({ type: "DECREASE_AMOUNT", payload: Name });
        };
      
        const increase = Name => {
          dispatchCartItems({ type: "INCREASE_AMOUNT", payload: Name });
        };

        useEffect(() => {
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }, [cartItems]);
      


        return [cartItems,addToCartHandler,reduce,increase];
};
export default useCart;